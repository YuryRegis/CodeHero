import { PUBLIC_KEY, PRIVATE_KEY } from '@env'
import axios, { AxiosInstance, AxiosResponse } from 'axios'


const MD5 = require('md5')
const API: AxiosInstance = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public',
})

export const getAllHeroes = async(offset: number, name?: string) => {
    const timeStamp = Number(new Date())
    const publicKey = PUBLIC_KEY
    const privateKey = PRIVATE_KEY
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