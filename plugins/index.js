import api from './axios'

export default {
  install: (app) => {
    app.config.globalProperties.$api = api
  }
}

export { api }