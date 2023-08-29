import request from '@/utils/request'

// 登录方法
export function login(username, password) {
  const data = {
    username,
    password,
  }
  if (username === 'cxb') {
    return Promise.resolve({ data: 'success' });
  } else {
    return Promise.resolve({ data: '账号密码错误' });
  }
  // return request({
  //   url: '/login',
  //   headers: {
  //     isToken: false
  //   },
  //   method: 'post',
  //   data: data
  // })
   
}

// 注册方法
export function register(data) {
  return request({
    url: '/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  // return request({
  //   url: '/getInfo',
  //   method: 'get'
  // })
  return Promise.resolve({ user: { userName: 'cxb', avatar: '' }})
}

// 退出方法
export function logout() {
  // return request({
  //   url: '/logout',
  //   method: 'post'
  // })
  return Promise.resolve({ data: 'success' })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/captchaImage',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}