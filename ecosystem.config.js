module.exports = {
  apps: [
    {
      name: "landing-page",
      script: "pnpm",
      args: "start",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
