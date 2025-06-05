const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Update this to your actual backend API (even if it's HTTP and doesn't support CORS)
const TARGET_API = 'https://49.207.10.152:8081';

app.use('/api', createProxyMiddleware({
  target: TARGET_API,
  changeOrigin: true,
  pathRewrite: { '^/api': '' },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`[PROXY] ${req.method} ${req.originalUrl} → ${TARGET_API}`);
  },
  onError(err, req, res) {
    console.error('[PROXY ERROR]', err);
    res.status(502).send('Proxy error');
  }
}));

app.get('/', (req, res) => {
  res.send('Reverse proxy is running. Use /api/... to access your backend.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
