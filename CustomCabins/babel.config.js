module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@Src': './src',
            '@Components': './src/components',
            '@Reusable': './src/reusable',
            '@Config': './src/config',
            '@Screens': './src/screens',
            '@Navigator': './src/navigator',
            '@Request': './src/requests',
            '@State': './src/state',
            '@Types': './src/types',
            '@Assets': './src/assets',
            '@Lang': './src/translation',
          },
        },
      ],
    ],
  };
};
