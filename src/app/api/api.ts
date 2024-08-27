import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://conexaosolidaria-d98a193ce593.herokuapp.com/api/'
})
