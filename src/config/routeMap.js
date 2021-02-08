import Loadable from 'react-loadable';
import Loading from '@/components/loading'

const Dashboard = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'), loading: Loading});
const Guide = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/guide'), loading: Loading});
const Page404 = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/error/404.jsx'), loading: Loading});
const Page403 = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/error/403.jsx'), loading: Loading});
const Permission = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/permission'), loading: Loading});
const Admin = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/permission/admin.jsx'), loading: Loading});
const Editor = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/permission/editor.jsx'), loading: Loading});
const Guest = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/permission/guest.jsx'), loading: Loading});
const RichText = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/components/richText.jsx'), loading: Loading});


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  { path: "/dashboard", component: Dashboard },
  { path: "/guide", component: Guide },
  { path: "/404", component: Page404 },
  { path: "/403", component: Page403 },
  { path: "/permission/explanation", component: Permission },
  { path: "/permission/adminPage", component: Admin },
  { path: "/permission/guestPage", component: Editor },
  { path: "/permission/editorPage", component: Guest },
  { path: "/components/richTextEditor", component: RichText },
]
