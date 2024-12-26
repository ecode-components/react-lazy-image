import { defineConfig } from 'dumi';

const publicPath =
  process.env.NODE_ENV === 'production' ? `/component/pro-image/` : '/';

const logo =
  'https://imagev2.xmcdn.com/storages/f8d2-audiofreehighqps/81/43/GMCoOSYIO18uAAAvaAIdYbXD.png';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'pro-image',
    logo,
  },
  publicPath,
  history: {
    type: 'hash',
  },
  hash: true,
  favicons: [logo],
});
