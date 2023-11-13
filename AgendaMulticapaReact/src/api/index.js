import axios from './axios'

export const getAlls = async () => {
  return await axios.get('/')
}
