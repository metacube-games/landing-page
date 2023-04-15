module.exports = {
    apps: [
      {
        name: "landing-page",
        script: "npm",
        args: "start",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };