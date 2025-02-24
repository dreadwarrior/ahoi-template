const path = require('path');
const autoprefixer = require('autoprefixer')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    app: './src/js/app.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './js/app.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "./css/[name].css",
      chunkFilename: "[id].css",
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        include: /src\/scss/,
        use: [
          // Creates `style` nodes from JS strings
          // fallback to style-loader in development
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          // Interprets `@import` and `url()` like `import/require()` and will resolve them
          "css-loader",
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          // Compiles Sass to CSS
          {
            "loader": "sass-loader",
            "options": {
              "sassOptions": {
                // Mute deprecations for Bootstrap 5.x import.
                "silenceDeprecations": ["color-functions", "global-builtin", "import", "mixed-decls"]
              }
            }
          },
        ]
      }
    ]
  },
};
