import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  routes: routes,
  dva: {
    immer: true,
    hmr: false,
  },
  locale: {
    default: 'zh-CN',
    antd: false,
    title: false,
    baseNavigator: true,
    baseSeparator: '-',
  },
  hash: true,
});
