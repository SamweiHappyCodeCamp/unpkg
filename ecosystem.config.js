module.exports = {
  apps : [{
    name: 'unpkg',
    script: 'server.js',
    cwd: './',
    env: {
      NODE_ENV: 'production',
      PORT: 8011,
    },
  }],
  ignore_watch: ['node_modules', 'logs', 'static'],
  instances: 1,
  env_production: {
    NODE_ENV: "production"
  },
  max_memory_restart: "1024M",
  out_file: "./logs/out.log",
  error_file: "./logs/err.log",
};
