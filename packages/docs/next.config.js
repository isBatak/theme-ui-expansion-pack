const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

const development = process.env.NODE_ENV !== 'production';

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  assetPrefix: !development ? '/theme-ui-expansion-pack/' : '',
  env: {
    linkPrefix: !development ? '/theme-ui-expansion-pack' : '',
  },
  // configOrigin: !development ? 'https://isbatak.github.io/theme-ui-expansion-pack/' : 'default',
});
