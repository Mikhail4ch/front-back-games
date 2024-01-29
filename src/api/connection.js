import axios from 'axios'

const BASE_URL = 'http://localhost:7070'
const connection = axios.create({baseURL: BASE_URL})

export default connection