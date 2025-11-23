module.exports = {
    apps: [
      {
        name: "landing-page",
        script: "bun",
        args: "start",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };