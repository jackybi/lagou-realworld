import { request } from '@/plugins/request'

//获取文章列表
export const getArticles = params => {
  return request({
    method: 'GET',
    url: 'api/articles',
    params
  })
}

//删除文章(喜欢的文章)
export const deleteArticle = slug => {
  return request({
    method: 'DELETE',
    url:`/api/articles/${slug}/favorite`,
  })
}

//创建文章
export const createArticle = data => {
  return request({
    method: 'POST',
    url:'api/articles',
    data
  })
}

//上传文章评论
export const addComments = (data,slug) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data
  })
}

//删除文章评论
export const deleteComment = (slug,id) => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${ slug }/comments/${ id }`,
  })
}

//删除文章
export const delArticle = slug => {
  return request({
    method: 'DELETE',
    url:`/api/articles/${slug}`
  })
}

//获取个人的文章列表
export const getFeedArticles = params => {
  return request({
    method: 'GET',
    url: 'api/articles/feed',
    params
  })
}

// 添加点赞
export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`,
  })
}

// 取消点赞
export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`,
  })
}

// 获取文章详情
export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`,
  })
}

// 获取文章评论
export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}