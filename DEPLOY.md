# Hướng dẫn Deploy lên Render

## Bước 1: Chuẩn bị Repository

1. **Push code lên GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Đảm bảo các file quan trọng:**
   - ✅ `render.yaml` - File cấu hình Render
   - ✅ `composer.json` - Dependencies PHP
   - ✅ `package.json` - Dependencies Node.js
   - ✅ `database/database.sqlite` - Database file

## Bước 2: Tạo tài khoản Render

1. Truy cập [render.com](https://render.com)
2. Đăng ký/Đăng nhập bằng GitHub
3. Kết nối repository GitHub

## Bước 3: Deploy từ GitHub

1. **Tạo Web Service:**
   - Click "New +" → "Web Service"
   - Connect GitHub repository
   - Chọn branch `main`
   - Render sẽ tự động detect `render.yaml`

2. **Cấu hình tự động:**
   - Render sẽ đọc `render.yaml` và cấu hình tự động
   - Service name: `nhutin-web`
   - Environment: PHP
   - Plan: Starter (Free)

## Bước 4: Environment Variables

Render sẽ tự động set các biến môi trường từ `render.yaml`:

- `APP_NAME=NHUTIN`
- `APP_ENV=production`
- `APP_DEBUG=false`
- `DB_CONNECTION=sqlite`
- `APP_KEY` (tự động generate)

## Bước 5: Build Process

Render sẽ tự động chạy:

1. `composer install --no-dev --optimize-autoloader`
2. `npm ci`
3. `npm run production`
4. `php artisan key:generate --force`
5. `php artisan config:cache`
6. `php artisan route:cache`
7. `php artisan view:cache`
8. `php artisan migrate --force`

## Bước 6: Truy cập Website

Sau khi deploy thành công:
- URL: `https://nhutin-web.onrender.com`
- Admin: `https://nhutin-web.onrender.com/admin`
- API: `https://nhutin-web.onrender.com/admin/api/`

## Lưu ý quan trọng

### Database
- Sử dụng SQLite (file-based)
- Database file: `/opt/render/project/src/database/database.sqlite`
- Migrations sẽ chạy tự động khi deploy

### Static Files
- Tất cả file trong `public/` sẽ được serve trực tiếp
- CSS/JS được compile và optimize

### Performance
- Cache được enable (config, route, view)
- Autoloader được optimize
- Assets được minify

### Security
- `APP_DEBUG=false` trong production
- CSRF protection enabled
- Secure session configuration

## Troubleshooting

### Lỗi thường gặp:

1. **Build failed:**
   - Kiểm tra `composer.json` và `package.json`
   - Đảm bảo PHP version >= 8.0

2. **Database error:**
   - Kiểm tra file `database/database.sqlite` có tồn tại
   - Đảm bảo migrations chạy thành công

3. **404 errors:**
   - Kiểm tra routes trong `routes/web.php`
   - Đảm bảo `.htaccess` hoặc server config đúng

### Logs:
- Xem logs trong Render Dashboard
- Check Laravel logs trong `storage/logs/`

## Custom Domain (Optional)

1. Trong Render Dashboard → Settings
2. Add custom domain
3. Update DNS records
4. Update `APP_URL` environment variable

## Auto Deploy

- Mỗi khi push code lên GitHub
- Render sẽ tự động rebuild và deploy
- Có thể disable trong settings nếu cần

---

**Chúc bạn deploy thành công! 🚀**
