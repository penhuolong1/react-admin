const tokens = {
  admin: "admin-token",
  guest: "guest-token",
  editor: "editor-token",
};

const users = {
  "admin-token": {
    id: "admin",
    role: "admin",
    name: "管理员",
    description: "拥有系统内所有菜单和路由权限",
  },
  "editor-token": {
    id: "editor",
    role: "editor",
    name: "编辑员",
    description: "可以看到除户管理页面之外的所有页面",
  },
  "guest-token": {
    id: "guest",
    role: "guest",
    name: "游客",
    description: "仅能看到Dashboard、开发文档、权限测试和关于作者四个页面",
  },
};

export const login = config => {
  const {
    username
  } = JSON.parse(config.body);
  const token = tokens[username];
  if (!token) {
    return {
      state: 1,
      message: "用户名或密码错误",
    };
  }
  return {
    state: 0,
    token,
  };
}
export const userInfo = (config) => {
  const {
    token
  } = JSON.parse(config.body);
  const userInfo = users[token];
  if (!userInfo) {
    return {
      state: 1,
      message: "获取用户信息失败",
    };
  }
  return {
    state: 0,
    userInfo,
  };
}
export const getUsers = () => {
  return {
    state: 0,
    users: Object.values(users),
  };
}

export const deleteUser = (config) => {
  const {
    id
  } = JSON.parse(config.body);
  const token = tokens[id];
  if (token) {
    delete tokens[id];
    delete users[token];
  }
  return {
    state: 0,
  };
}
