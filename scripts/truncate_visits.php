<?php
// Truncate visits table to reset statistics to zero
$dsn = 'mysql:host=127.0.0.1;port=3306;dbname=nhutin_db;charset=utf8mb4';
$user = 'root';
$pass = '1';

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    // Ensure table exists, then truncate
    $pdo->exec('CREATE TABLE IF NOT EXISTS visits (
        id INT AUTO_INCREMENT PRIMARY KEY,
        path VARCHAR(255) NULL,
        ip VARCHAR(64) NULL,
        user_agent VARCHAR(512) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4');

    $pdo->exec('TRUNCATE TABLE visits');
    echo "OK\n";
} catch (Throwable $e) {
    fwrite(STDERR, 'ERROR: ' . $e->getMessage() . "\n");
    exit(1);
}
