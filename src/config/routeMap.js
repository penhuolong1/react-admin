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
const Draggable = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/components/draggable.jsx'), loading: Loading});
const JSONForm = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/components/JSON-Form.jsx'), loading: Loading});
const Menu1 = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/nested/menu1.jsx'), loading: Loading});
const Menu121 = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/nested/menu1-2-1.jsx'), loading: Loading});
const Table = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/table/index.jsx'), loading: Loading});
const ExcelExport = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/excel/excelExport.jsx'), loading: Loading});
const ExcelUpload = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/excel/excelUpload.jsx'), loading: Loading});
const ExcelZip = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/zip/index.jsx'), loading: Loading});
const Copy = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/copy/index.jsx'), loading: Loading});
const Bug = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/bug/index.jsx'), loading: Loading});


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
  { path: "/components/draggable", component: Draggable },
  { path: "/components/JSON-Form", component: JSONForm },
  { path: "/nested/menu1/menu1-1", component: Menu1 },
  { path: "/nested/menu1/menu1-2/menu1-2-1", component: Menu121 },
  { path: "/table", component: Table },
  { path: "/excel/export", component: ExcelExport },
  { path: "/excel/upload", component: ExcelUpload },
  { path: "/zip", component: ExcelZip },
  { path: "/clipboard", component: Copy },
  { path: "/bug", component: Bug }
]
