import axios, { AxiosInstance, AxiosResponse } from 'axios'


const MD5 = require('md5')
const API: AxiosInstance = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
})

export const getAllHeroes = async(offset: number, name?: string) => {
    const timeStamp = Number(new Date())
    const publicKey = 'a1c8cb9003de0daad5bd5b85661aa8c6'
    const privateKey = 'bcf8c4df391cd74710d33f021b7fc039b51355f0'
    const hash = MD5(`${timeStamp}${privateKey}${publicKey}`)
    
    const params = {
        ts: timeStamp,
        apikey: publicKey,
        limit: 4,
        offset,
        hash,
        name
    }
    
    try {
        const response: AxiosResponse = await API.get('/characters', { params })
        const { data } = response
        return data
    } catch (error) {
        console.log(error)
    }
}


export default API