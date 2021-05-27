//config/routes.ts
export default [
  {
    path: '/',
    component: '@/layouts/LayoutFixed',
    routes: [
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
        path: '/contact',
        component: '@/pages/Contact',
      },
      {
        path: '/high/:chart',
        component: '@/pages/Highcharts/[index]',
      },
      {
        path: '/test',
        component: '@/pages/Test',
      },
      {
        path: '/users',
        component: '@/pages/users',
      },
      {
        path: '/network/:chart',
        component: '@/pages/Network/[index]',
      },
      {
        path: '/pie',
        component: '@/pages/Pie',
      },
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
    ],
  },
];
