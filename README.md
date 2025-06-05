# Reverse Proxy Server (Node.js + Express)

This is a reverse proxy server using Express and `http-proxy-middleware` that forwards all `/api/*` calls to your backend API.

## 🧩 How it works

- Requests to `/api/...` will be proxied to `http://your-insecure-api.com/...`.
- Useful for handling CORS, HTTP→HTTPS bridging, and hiding insecure endpoints from the frontend.

## 🛠️ Setup

### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/reverse-proxy.git
cd reverse-proxy
npm install
```

### 2. Update `TARGET_API` in `server.js`

Replace `'http://your-insecure-api.com'` with your actual backend URL.

### 3. Run Locally

```bash
npm start
```

Proxy server runs on `http://localhost:3000`

### 4. Deploy to Render

- Go to [https://render.com](https://render.com)
- Create a **new Web Service** from your GitHub repo
- Set the build & start command:
  ```
  Build: npm install
  Start: npm start
  ```
- You'll get a URL like `https://your-proxy.onrender.com`

## 🧪 Test Proxy

```bash
curl https://your-proxy.onrender.com/api/some-endpoint
```

---

## 🔐 Production Use

Use this proxy in your frontend (React/Vite):

```js
fetch('https://your-proxy.onrender.com/api/data')
```

---
