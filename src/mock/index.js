import Mock from "mockjs";
import { login, userInfo } from './login'
import { dashboardList } from './dashboard'
import { tableList } from './table'

Mock.mock(/\/login/, "post", login);
Mock.mock(/\/userInfo/, "get", userInfo);

Mock.mock(/\/dashboard\/list/, "get", dashboardList);

Mock.mock(/\/table\/list/, "get", tableList);
