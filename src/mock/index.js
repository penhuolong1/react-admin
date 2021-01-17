import Mock from "mockjs";
import { login, userInfo } from './login'

Mock.mock(/\/login/, "post", login);
Mock.mock(/\/userInfo/, "get", userInfo);