//config/routes.ts
export default [
  {
    path: '/',
    component: '@/layouts/LayoutFixed',
    routes: [
      {
        name: '403',
        path: '/exception403',
        component: './Exception403',
      },
      {
        name: '404',
        path: '/exception404',
        component: './Exception404',
      },
      {
        name: '500',
        path: '/exception500',
        component: './Exception500',
      },
      {
        name: '标准列表',
        path: '/listbasiclist',
        component: './ListBasicList',
      },
      {
        path: '/',
        component: '@/pages/index',
      },
      {
        path: '/home',
        component: '@/pages/index',
      },
      {
        path: '/members',
        component: '@/pages/Members',
      },
      {
        path: '/publications',
        component: '@/pages/Publications',
      },
      {
        path: '/research',
        component: '@/pages/Research',
      },
      {
        path: '/projects',
        component: '@/pages/Projects',
      },
      {
        path: '/news',
        component: '@/pages/News',
      },
      {
        path: '/other',
        component: '@/pages/Other',
      },
      {
        path: '/high',
        component: '@/pages/Highcharts',
      },
      {
        path: '/test',
        component: '@/pages/Test',
      },
    ],
  },
];
