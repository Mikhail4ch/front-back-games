import axios from 'axios'

const BASE_URL = process.env.BASE_URL
const mockAPI = axios.create({baseURL: BASE_URL})

export default mockAPI