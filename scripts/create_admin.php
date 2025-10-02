<?php
// Create or update admin user in MariaDB using provided credentials
// DB: nhutin_db, host: 127.0.0.1, port: 3306, user: root, pass: 1

error_reporting(E_ALL);
ini_set('display_errors', '1');

$dsn = 'mysql:host=127.0.0.1;port=3306;dbname=nhutin_db;charset=utf8mb4';
$user = 'root';
$pass = '1';

$username = 'nhutin';
$email = 'admin@example.com';
$plainPassword = '1';

try {
    $pdo = new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    $hash = password_hash($plainPassword, PASSWORD_BCRYPT);

    // Ensure unique constraints exist on username/email; upsert by username
    $stmt = $pdo->prepare('SELECT id FROM users WHERE username = ? LIMIT 1');
    $stmt->execute([$username]);
    $existing = $stmt->fetch();

    if ($existing) {
        $upd = $pdo->prepare('UPDATE users SET email = ?, password = ? WHERE id = ?');
        $upd->execute([$email, $hash, $existing['id']]);
        echo "Updated user '{$username}' with bcrypt password.\n";
    } else {
        $ins = $pdo->prepare('INSERT INTO users (username, email, password) VALUES (?, ?, ?)');
        $ins->execute([$username, $email, $hash]);
        echo "Inserted user '{$username}' with bcrypt password.\n";
    }

    // Verify write
    $check = $pdo->prepare('SELECT username, email FROM users WHERE username = ?');
    $check->execute([$username]);
    $row = $check->fetch();
    echo json_encode($row, JSON_UNESCAPED_UNICODE) . "\n";
} catch (Throwable $e) {
    fwrite(STDERR, 'ERROR: ' . $e->getMessage() . "\n");
    exit(1);
}


