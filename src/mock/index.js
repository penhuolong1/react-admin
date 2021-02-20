import Mock from "mockjs";
import { login, userInfo } from './login'
import { dashboardList } from './dashboard'
import { tableList, deleteItem, editItem, findTableById } from './table'

Mock.mock(/\/login/, "post", login);
Mock.mock(/\/userInfo/, "get", userInfo);

Mock.mock(/\/dashboard\/list/, "get", dashboardList);

Mock.mock(/\/table\/list/, "get", tableList);
Mock.mock(/\/table\/del/, "get", deleteItem);
Mock.mock(/\/table\/edit/, "post", editItem);
Mock.mock(/\/table\/findById/, "get", findTableById);
