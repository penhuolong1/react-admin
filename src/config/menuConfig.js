import {
  PieChartOutlined,
  SettingOutlined,
  HomeOutlined
} from '@ant-design/icons';
/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/dashboard",
    icon: <HomeOutlined />,
    roles:["admin","editor","guest"]
  },
  {
    title: "开发文档",
    path: "/doc",
    icon: <SettingOutlined></SettingOutlined>,
    roles:["admin","editor","guest"]
  },
  {
    title: "引导页",
    path: "/guide",
    icon: <SettingOutlined></SettingOutlined>,
    roles:["admin","editor"]
  }
];
export default menuList;
