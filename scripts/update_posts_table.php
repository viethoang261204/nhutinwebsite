<?php
// Update posts table structure to support multilingual content
// DB: nhutin_db, host: 127.0.0.1, port: 3306, user: root, pass: 1

error_reporting(E_ALL);
ini_set('display_errors', '1');

$dsn = 'mysql:host=127.0.0.1;port=3306;dbname=nhutin_db;charset=utf8mb4';
$user = 'root';
$pass = '1';

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    // Check if posts table exists and its structure
    $result = $pdo->query("SHOW TABLES LIKE 'posts'")->fetch();
    if ($result) {
        echo "Posts table exists. Checking structure...\n";
        
        // Get current columns
        $columns = $pdo->query("SHOW COLUMNS FROM posts")->fetchAll(PDO::FETCH_COLUMN);
        echo "Current columns: " . implode(', ', $columns) . "\n";
        
        // Add new columns if they don't exist
        $newColumns = [
            'title_vi' => 'VARCHAR(255) NOT NULL DEFAULT ""',
            'title_en' => 'VARCHAR(255) NOT NULL DEFAULT ""',
            'content_vi' => 'TEXT NOT NULL DEFAULT ""',
            'content_en' => 'TEXT NOT NULL DEFAULT ""',
            'is_published' => 'BOOLEAN DEFAULT FALSE'
        ];
        
        foreach ($newColumns as $column => $definition) {
            if (!in_array($column, $columns)) {
                $sql = "ALTER TABLE posts ADD COLUMN {$column} {$definition}";
                echo "Adding column: {$column}\n";
                $pdo->exec($sql);
            } else {
                echo "Column {$column} already exists\n";
            }
        }
        
        // If title column exists but title_vi doesn't, copy data
        if (in_array('title', $columns) && in_array('title_vi', $columns)) {
            $pdo->exec("UPDATE posts SET title_vi = title WHERE title_vi = ''");
            $pdo->exec("UPDATE posts SET title_en = title WHERE title_en = ''");
        }
        
        if (in_array('content', $columns) && in_array('content_vi', $columns)) {
            $pdo->exec("UPDATE posts SET content_vi = content WHERE content_vi = ''");
            $pdo->exec("UPDATE posts SET content_en = content WHERE content_en = ''");
        }
        
    } else {
        echo "Posts table does not exist. Creating...\n";
        $pdo->exec('CREATE TABLE posts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title_vi VARCHAR(255) NOT NULL,
            title_en VARCHAR(255) NOT NULL,
            content_vi TEXT NOT NULL,
            content_en TEXT NOT NULL,
            image_url VARCHAR(255) NULL,
            category_id INT NULL,
            author_id INT NOT NULL,
            is_published BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            FOREIGN KEY (category_id) REFERENCES categories(id),
            FOREIGN KEY (author_id) REFERENCES users(id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4');
    }

    echo "Posts table structure updated successfully!\n";

} catch (Throwable $e) {
    fwrite(STDERR, 'ERROR: ' . $e->getMessage() . "\n");
    exit(1);
}
