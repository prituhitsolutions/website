const path = require('path');

module.exports = {
  apps: [
    {
      name: 'prituhit',
      script: path.join(__dirname, 'server', 'src', 'index.js'),
      cwd: __dirname,
      watch: false,
      autorestart: true,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 5000,
        DATABASE_URL: process.env.DATABASE_URL,
        DATABASE_SSL: process.env.DATABASE_SSL || 'true',
        ADMIN_KEY: process.env.ADMIN_KEY,
        CLIENT_ORIGIN: process.env.CLIENT_ORIGIN || '*'
      }
    }
  ]
};
