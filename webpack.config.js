// webpack.config.js
module.exports = {
    // ... other webpack configurations
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        // Other rules for different file types
      ],
    },
    // ... other webpack configurations
  };
  