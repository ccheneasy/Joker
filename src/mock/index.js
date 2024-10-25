import Mock from 'mockjs'

Mock.setup({
  timeout: Mock.mock('@natural(100, 1000)')
})

Mock.mock('login/code', 'get', {
  code: 0,
  data: {
    VerCode: '@cword(5)'
  }
})

Mock.mock('users/login', 'post', data => {
  const res = JSON.parse(data.body)
  console.log(res, 'res')
  return {
    code: 0,
    data: {
      token: Mock.mock("@guid") 
    }
  }
})

Mock.mock('users/info', 'get', {
  code: 0,
  data: {
    username: 'admin',
    roles: ['admin', 'editor'],
    email: "@email",
    paragraph: '@cparagraph',
    city: '@county(true)'
  }
})