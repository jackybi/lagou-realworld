import { request } from '@/plugins/request'


//获取用户个人信息
export const getProfile = username => {
  return request({
    method: 'GET',
    url: `api/profiles/${username}`,
  })
}

//用户登陆
export const login = data => {
  return request({
    method: 'POST',
    url: 'api/users/login',
    data
  })
}

//用户注册
export const register = data =>{
  return request({
    method: 'POST',
    url: 'api/users',
    data
  })
}

//获取当前登陆用户
export const getCurrentUser = () => {
  return request({
    method: 'GET',
    url: '/api/user',
  })
}


// 更新用户信息
export const updateUser = data => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data,
  })
}