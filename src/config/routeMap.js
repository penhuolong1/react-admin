import Loadable from 'react-loadable';
import Loading from '@/components/loading'

const Dashboard = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'), loading: Loading});
const Doc = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/doc'), loading: Loading});
const Guide = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/guide'), loading: Loading});


export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin","editor","guest"] },
  { path: "/doc", component: Doc, roles: ["admin","editor","guest"] },
  { path: "/guide", component: Guide, roles: ["admin","editor"] }
]