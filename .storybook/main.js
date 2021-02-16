const path = require("path");
const webpack = require("webpack");

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.css$/,
      // use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [require("tailwindcss"), require("autoprefixer")],
            config: {
              path: "./.storybook/",
            },
            sourceMap: true,
          },
        },
      ],
      include: path.resolve(__dirname, "../"),
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.__NEXT_IMAGE_OPTS": JSON.stringify({
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          domains: [],
          path: "/",
          loader: "default",
        }),
      })
    );

    config.resolve.extensions.push(".js", ".jsx");

    return config;
  },
};
