// plugins/axios.js
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://servicioadministrador.upea.bo/api/v2',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': '*aplication/json*'
  }
})

api.interceptors.request.use(config => {
  const token = process.env.NEXT_PUBLIC_API_TOKEN
  const origin = process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:5173'
  
  // Agregar token si existe
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  
  // Agregar Origin (necesario para CORS)
  config.headers.Origin = origin
  
  // ❌ REMOVIDO: User-Agent (los navegadores no lo permiten)
  // El navegador automáticamente envía su propio User-Agent
  
  return config
})

api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      console.error('❌ Token inválido')
    } else if (error.response?.status === 403) {
      console.error('❌ Acceso denegado')
    } else if (error.response?.status === 404) {
      console.warn('⚠️ Endpoint no encontrado:', error.config.url)
    } else if (error.response?.status >= 500) {
      console.error('❌ Error del servidor:', error.response.status)
    }
    return Promise.reject(error)
  }
)

export default api