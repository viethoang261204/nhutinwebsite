# 🚂 Deploy Laravel lên Railway

## Tại sao chọn Railway?

### ✅ **Ưu điểm:**
- **Miễn phí** - $5 credit/tháng (đủ cho app nhỏ)
- **Dễ deploy** - Chỉ cần connect GitHub repo
- **Auto-deploy** - Tự động deploy khi push code
- **Database tích hợp** - PostgreSQL/MySQL có sẵn
- **Environment variables** - Quản lý dễ dàng
- **Logs real-time** - Xem logs trực tiếp
- **Custom domains** - Có thể dùng domain riêng

## 📋 Các bước Deploy

### 1. **Chuẩn bị code**
```bash
git add .
git commit -m "Add Railway deployment configuration"
git push origin main
```

### 2. **Tạo project trên Railway**
1. Vào [railway.app](https://railway.app)
2. Đăng nhập bằng GitHub
3. Click **"New Project"** → **"Deploy from GitHub repo"**
4. Chọn repository `nhutinwebsite`

### 3. **Cấu hình Environment Variables**
Trong Railway Dashboard → Variables:

```env
APP_NAME=NHUTIN
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-app-name.railway.app
APP_KEY=base64:your-generated-key

DB_CONNECTION=sqlite
DB_DATABASE=/var/www/html/database/database.sqlite

CACHE_DRIVER=file
SESSION_DRIVER=file
SESSION_LIFETIME=120
```

### 4. **Deploy**
Railway sẽ tự động:
- ✅ Detect Dockerfile
- ✅ Build Docker image
- ✅ Install dependencies
- ✅ Build assets
- ✅ Run migrations
- ✅ Start app

## 🔧 Cấu hình Docker

### **Dockerfile đã được tối ưu:**
- ✅ Install dev dependencies trước để chạy artisan commands
- ✅ Build assets với npm
- ✅ Loại bỏ dev dependencies sau khi build
- ✅ Cache Laravel config
- ✅ Chạy migrations tự động

### **Lỗi đã được sửa:**
- ✅ `composer install` với dev dependencies trước
- ✅ Tạo `.env.example` file
- ✅ Xử lý artisan package:discover

## 🚀 Quá trình Deploy

### **Build Process:**
1. Railway clone code từ GitHub
2. Build Docker image từ Dockerfile
3. Install PHP dependencies (Composer)
4. Install Node.js dependencies (npm)
5. Build assets (npm run production)
6. Cache Laravel (config, routes, views)

### **Runtime:**
1. Start Apache
2. Chạy database migrations
3. Serve application

## 📊 Monitoring & Logs

### **Xem Logs:**
- Railway Dashboard → Project → Deployments
- Click vào deployment → View logs
- Logs real-time khi app chạy

### **Health Check:**
- Railway tự động check `/` endpoint
- Nếu fail → tự động restart

## 🔄 Auto-Deploy

### **Kích hoạt:**
1. Railway Dashboard → Settings
2. Enable **"Auto Deploy"**
3. Chọn branch `main`

### **Khi nào deploy:**
- ✅ Push code mới lên GitHub
- ✅ Merge pull request
- ✅ Manual deploy từ dashboard

## 💰 Pricing

### **Free Tier:**
- $5 credit/tháng
- Đủ cho app nhỏ (1-2 services)
- 512MB RAM
- 1GB storage

### **Pro Plan:**
- $5/tháng
- Unlimited services
- More resources
- Priority support

## 🛠️ Troubleshooting

### **Build Fail:**
1. Check logs trong Railway Dashboard
2. Kiểm tra Dockerfile syntax
3. Đảm bảo tất cả dependencies có sẵn

### **App không chạy:**
1. Check environment variables
2. Xem runtime logs
3. Kiểm tra database connection

### **Database issues:**
1. Đảm bảo migrations chạy thành công
2. Check database credentials
3. Verify database service đang chạy

## 🎯 Kết quả mong đợi

Sau khi deploy thành công:
- ✅ App accessible qua Railway URL
- ✅ Database migrations chạy tự động
- ✅ Assets được build và optimize
- ✅ Auto-deploy khi push code mới
- ✅ Logs real-time để debug

## 🔗 Useful Links

- [Railway Documentation](https://docs.railway.app)
- [Laravel on Railway](https://docs.railway.app/guides/laravel)
- [Docker on Railway](https://docs.railway.app/guides/docker)
