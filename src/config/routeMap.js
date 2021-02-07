import Loadable from 'react-loadable';
import Loading from '@/components/loading'

const Dashboard = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'), loading: Loading});
const Guide = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/guide'), loading: Loading});
const Page404 = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/error/404.jsx'), loading: Loading});
const Page403 = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/error/403.jsx'), loading: Loading});


export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin","editor","guest"] },
  { path: "/guide", component: Guide, roles: ["admin","editor"] },
  { path: "/404", component: Page404, roles: ["admin","editor","guest"] },
  { path: "/403", component: Page403, roles: ["admin","editor","guest"] },
]
