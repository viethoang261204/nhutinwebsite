# Test admin login and API
$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession

# Get login page first
try {
    $loginPage = Invoke-WebRequest -Uri "http://127.0.0.1:8000/admin/login" -WebSession $session
    Write-Host "Login page loaded successfully"
} catch {
    Write-Host "Error loading login page: $($_.Exception.Message)"
    exit 1
}

# Login
$loginData = @{
    username = "nhutin"
    password = "1"
}

try {
    $loginResponse = Invoke-WebRequest -Uri "http://127.0.0.1:8000/admin/login" -Method POST -Body $loginData -WebSession $session
    Write-Host "Login successful, status: $($loginResponse.StatusCode)"
} catch {
    Write-Host "Login failed: $($_.Exception.Message)"
    exit 1
}

# Get stats
try {
    $statsResponse = Invoke-WebRequest -Uri "http://127.0.0.1:8000/admin/api/stats" -WebSession $session
    Write-Host "Stats API response:"
    Write-Host $statsResponse.Content
} catch {
    Write-Host "Stats API failed: $($_.Exception.Message)"
    exit 1
}
