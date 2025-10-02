<?php
// Create sample data for categories and posts
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

    // Create categories table if not exists
    $pdo->exec('CREATE TABLE IF NOT EXISTS categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4');

    // Create posts table if not exists (updated structure)
    $pdo->exec('CREATE TABLE IF NOT EXISTS posts (
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

    // Insert sample categories
    $categories = [
        ['name' => 'Công nghệ'],
        ['name' => 'Kinh doanh'],
        ['name' => 'Giáo dục'],
        ['name' => 'Thể thao'],
        ['name' => 'Giải trí']
    ];

    foreach ($categories as $category) {
        $stmt = $pdo->prepare('INSERT IGNORE INTO categories (name) VALUES (?)');
        $stmt->execute([$category['name']]);
    }

    // Get category IDs
    $categoryIds = $pdo->query('SELECT id FROM categories')->fetchAll(PDO::FETCH_COLUMN);

    // Insert sample posts
    $posts = [
        [
            'title_vi' => 'Xu hướng công nghệ mới năm 2024',
            'title_en' => 'New Technology Trends in 2024',
            'content_vi' => 'Công nghệ AI và machine learning đang phát triển mạnh mẽ...',
            'content_en' => 'AI and machine learning technologies are developing strongly...',
            'image_url' => 'https://via.placeholder.com/400x200',
            'category_id' => $categoryIds[0] ?? 1,
            'is_published' => true
        ],
        [
            'title_vi' => 'Chiến lược kinh doanh hiệu quả',
            'title_en' => 'Effective Business Strategy',
            'content_vi' => 'Để thành công trong kinh doanh, bạn cần có chiến lược rõ ràng...',
            'content_en' => 'To succeed in business, you need a clear strategy...',
            'image_url' => 'https://via.placeholder.com/400x200',
            'category_id' => $categoryIds[1] ?? 2,
            'is_published' => true
        ],
        [
            'title_vi' => 'Phương pháp học tập hiện đại',
            'title_en' => 'Modern Learning Methods',
            'content_vi' => 'Học tập trực tuyến đang trở thành xu hướng...',
            'content_en' => 'Online learning is becoming a trend...',
            'image_url' => 'https://via.placeholder.com/400x200',
            'category_id' => $categoryIds[2] ?? 3,
            'is_published' => false
        ]
    ];

    foreach ($posts as $post) {
        $stmt = $pdo->prepare('INSERT IGNORE INTO posts (title_vi, title_en, content_vi, content_en, image_url, category_id, author_id, is_published) VALUES (?, ?, ?, ?, ?, ?, 1, ?)');
        $stmt->execute([
            $post['title_vi'],
            $post['title_en'],
            $post['content_vi'],
            $post['content_en'],
            $post['image_url'],
            $post['category_id'],
            $post['is_published']
        ]);
    }

    echo "Sample data created successfully!\n";
    echo "Categories: " . count($categories) . "\n";
    echo "Posts: " . count($posts) . "\n";

} catch (Throwable $e) {
    fwrite(STDERR, 'ERROR: ' . $e->getMessage() . "\n");
    exit(1);
}
