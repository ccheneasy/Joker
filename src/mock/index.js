import Mock from 'mockjs'

const userData = [
  {
    username: Mock.mock('@string("lower", 5)'),
    password: Mock.mock('@string("number", 3)'),
    verCode: Mock.mock('@natural(1000, 9999)') + '',
    token: Mock.mock("@guid"),
    chineseName: Mock.mock('@cname'),
    age: Mock.mock('@natural(10, 80)'),
    address: Mock.mock('@county(true)'),
    paragraph: Mock.mock('@cparagraph'),
    date: Mock.mock('@now'),
    roles: ['ADMIN', 'ROOT']
  }
]

Mock.setup({
  timeout: Mock.mock('@natural(100, 1000)')
})

Mock.mock('login/getAccount', 'get', data => {
  userData[0].verCode = Mock.mock('@natural(1000, 9999)') + ''
  return {
    code: 0,
    data: {
      username: userData[0].username,
      password: userData[0].password,
      verCode: userData[0].verCode,
    }
  }
})

Mock.mock('login/refreshCode', 'get', data => {
  userData[0].verCode = Mock.mock('@natural(1000, 9999)') + ''
  return {
    code: 0,
    data: {
      verCode: userData[0].verCode,
    }
  }
})

Mock.mock('users/login', 'post', data => {
  const { username, password, code } = JSON.parse(data.body)
  const currentUser = userData.find(t => t.username === username)
  if (!currentUser) {
    return {
      code: 1,
      data: {
        token: null
      },
      message: '账户不存在，请重新登录'
    }
  }
  if (currentUser.password !== password){
    return {
      code: 1,
      data: {
        token: null
      },
      message: '密码错误，请重新登录'
    }
  }
  if (currentUser.verCode !== code) {
    return {
      code: 1,
      data: {
        token: null
      },
      message: '验证码错误，请重新登录'
    }
  }
  return {
    code: 0,
    data: {
      token: currentUser.token
    },
    message: '登录成功'
  }
})

Mock.mock('users/info', 'get', {
  code: 0,
  data: { ...userData[0] }
})
