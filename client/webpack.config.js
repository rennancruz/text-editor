const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true, // Clears old builds automatically
    },
    devServer: {
      hot: true, // Enables Hot Module Replacement
      open: true, // Automatically opens the app in the browser
    },
    plugins: [
      // Generates the main HTML file
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "Text Editor",
      }),
      // Injects the custom service worker
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),
      // Creates the PWA manifest file
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "Text Editor PWA",
        short_name: "TextEditor",
        description: "Edit text anywhere, anytime!",
        background_color: "#225ca3",
        theme_color: "#225ca3",
        start_url: "/",
        publicPath: "/",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
  };
};
