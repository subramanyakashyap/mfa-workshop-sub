module.exports = function override(config, env) {
  config.module.rules.push({
    test: /\.(png|jpg|gif)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  });
  return config;
};
