<?php
// Create sample visit data for testing dashboard charts
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

    // Create visits table if not exists
    $pdo->exec('CREATE TABLE IF NOT EXISTS visits (
        id INT AUTO_INCREMENT PRIMARY KEY,
        path VARCHAR(255) NULL,
        ip VARCHAR(64) NULL,
        user_agent VARCHAR(512) NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_created_at (created_at)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4');

    // Clear existing data
    $pdo->exec('DELETE FROM visits');

    // Generate sample data for last 30 days
    $paths = ['/', '/news', '/aboutnhutin', '/product', '/downloads'];
    $ips = ['192.168.1.1', '192.168.1.2', '10.0.0.1', '127.0.0.1'];
    $userAgents = [
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36'
    ];

    $stmt = $pdo->prepare('INSERT INTO visits (path, ip, user_agent, created_at) VALUES (?, ?, ?, ?)');
    
    // Generate visits for last 30 days
    for ($i = 0; $i < 30; $i++) {
        $date = date('Y-m-d H:i:s', strtotime("-{$i} days"));
        
        // Random number of visits per day (1-20)
        $visitsPerDay = rand(1, 20);
        
        for ($j = 0; $j < $visitsPerDay; $j++) {
            $path = $paths[array_rand($paths)];
            $ip = $ips[array_rand($ips)];
            $userAgent = $userAgents[array_rand($userAgents)];
            
            // Add some random time within the day
            $randomTime = date('Y-m-d H:i:s', strtotime($date) + rand(0, 86400));
            
            $stmt->execute([$path, $ip, $userAgent, $randomTime]);
        }
    }

    // Generate some older data for monthly/yearly charts
    for ($month = 1; $month <= 12; $month++) {
        $date = date('Y-m-15 12:00:00', strtotime("-{$month} months"));
        $visitsPerMonth = rand(50, 200);
        
        for ($j = 0; $j < $visitsPerMonth; $j++) {
            $path = $paths[array_rand($paths)];
            $ip = $ips[array_rand($ips)];
            $userAgent = $userAgents[array_rand($userAgents)];
            
            $randomTime = date('Y-m-d H:i:s', strtotime($date) + rand(0, 2592000)); // random within month
            
            $stmt->execute([$path, $ip, $userAgent, $randomTime]);
        }
    }

    // Check total visits created
    $count = $pdo->query('SELECT COUNT(*) as total FROM visits')->fetch();
    echo "Created {$count['total']} sample visits\n";

    // Show some sample data
    $sample = $pdo->query('SELECT path, created_at FROM visits ORDER BY created_at DESC LIMIT 5')->fetchAll();
    echo "Sample data:\n";
    foreach ($sample as $row) {
        echo "- {$row['path']} at {$row['created_at']}\n";
    }

} catch (Throwable $e) {
    fwrite(STDERR, 'ERROR: ' . $e->getMessage() . "\n");
    exit(1);
}
