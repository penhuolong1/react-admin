import Mock from "mockjs";
import { login, userInfo } from './login'
import { tableList } from './dashboard'

Mock.mock(/\/login/, "post", login);
Mock.mock(/\/userInfo/, "get", userInfo);

Mock.mock(/\/dashboard\/list/, "get", tableList);
