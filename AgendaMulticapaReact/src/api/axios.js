import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://www.raydelto.org/agenda.php',
})

export default instance
