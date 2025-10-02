# Hướng dẫn Deploy Laravel App với Docker trên Render

## Cấu hình Docker

### 1. Dockerfile
- Sử dụng PHP 8.1 với Apache
- Cài đặt tất cả dependencies cần thiết
- Build assets và cache Laravel

### 2. Cấu hình Apache
- File: `docker/apache/000-default.conf`
- Cấu hình DocumentRoot thành `/var/www/html/public`
- Bật mod_rewrite

### 3. File cấu hình Render
- `render.yaml`: Sử dụng `env: docker` thay vì `env: php`
- `dockerfilePath: ./Dockerfile`

## Các bước Deploy

### 1. Commit và Push code
```bash
git add .
git commit -m "Add Docker configuration for Render deployment"
git push origin main
```

### 2. Deploy trên Render
1. Vào Render Dashboard
2. Chọn service "nhutin-web"
3. Click "Manual Deploy" → "Deploy latest commit"
4. Hoặc Render sẽ tự động deploy khi push code mới

### 3. Kiểm tra logs
- Vào Render Dashboard
- Chọn service
- Click tab "Logs" để xem quá trình build

## Lợi ích của Docker

### ✅ Kiểm soát hoàn toàn môi trường
- PHP 8.1 (thay vì 7.3 mặc định)
- Tất cả extensions cần thiết
- Node.js và npm

### ✅ Build process rõ ràng
- Cài đặt dependencies
- Build assets
- Cache Laravel
- Chạy migrations

### ✅ Ổn định và có thể tái tạo
- Môi trường giống nhau mọi lúc
- Không phụ thuộc vào cấu hình Render

## Troubleshooting

### Nếu build fail:
1. Kiểm tra logs trong Render Dashboard
2. Đảm bảo tất cả files được commit
3. Kiểm tra Dockerfile syntax

### Nếu app không chạy:
1. Kiểm tra environment variables
2. Kiểm tra database connection
3. Xem logs runtime

## Environment Variables cần thiết

```yaml
APP_NAME=NHUTIN
APP_ENV=production
APP_DEBUG=false
APP_URL=https://nhutin-web.onrender.com
DB_CONNECTION=sqlite
DB_DATABASE=/var/www/html/database/database.sqlite
```

## Kết quả mong đợi

Sau khi deploy thành công:
- ✅ App chạy trên PHP 8.1
- ✅ Tất cả dependencies được cài đặt
- ✅ Assets được build
- ✅ Database migrations chạy
- ✅ Laravel cache được tối ưu
- ✅ App accessible qua URL Render
