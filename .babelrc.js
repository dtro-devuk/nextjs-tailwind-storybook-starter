module.exports = {
  env: {},
  presets: [
    [
      'next/babel',
      {
        'preset-react': {
          runtime: 'automatic',
        },
      },
      // 'module-resolver',
      // {
      //   root: ['./src'],
      //   alias: {
      //     '~': './src',
      //   },
      // },
    ],
  ],
  plugins: ['babel-plugin-macros', ['styled-components', { ssr: true }]],
};
