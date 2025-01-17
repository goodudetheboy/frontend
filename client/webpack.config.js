const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const settings = {
  distPath: path.join(__dirname, "dist"),
  srcPath: path.join(__dirname, "src"),
};

function srcPathExtend(subpath) {
  return path.join(settings.srcPath, subpath);
}

module.exports = (env, options) => {
  const isDevMode = options.mode === "development";

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index_bundle.js",
      publicPath: "/",
    },
    devServer: {
      historyApiFallback: true,
    },
    devtool: isDevMode ? "source-map" : false,
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: isDevMode,
              },
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [require("autoprefixer")()],
                sourceMap: isDevMode,
              },
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: isDevMode,
              },
            },
          ],
        },
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          use: {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "assets/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        verbose: true,
      }),
      new HtmlWebpackPlugin({
        template: srcPathExtend("../public/index.html"),
      }),
    ],
  };
};
