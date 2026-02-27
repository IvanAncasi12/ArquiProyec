// src/plugins/index.js
import api from './axios'

export default {
  install: (app) => {
    // Hacer la instancia de axios disponible globalmente
    app.config.globalProperties.$api = api
  }
}

// Exportar también individualmente para imports directos
export { api }