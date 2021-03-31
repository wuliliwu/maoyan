import axios from 'axios'
export function request(config ){
  // 在这个函数里面创建实例
  const instance = axios.create({
    // baseURL='http://localhost:8080/',
    timeout:'5000'
  })
  // 发送真正的网络请求
  return instance(config)
}

