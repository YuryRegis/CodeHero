import { ResponseProps } from 'api'
import axios, { AxiosInstance, AxiosResponse } from 'axios'
import CryptoJS from 'crypto'

const API: AxiosInstance = axios.create({
    baseURL: 'https://developer.marvel.com/',
})

export const getAllHeroes = async() => {
    const timeStamp = Number(new Date())
    const publicKey = 'a1c8cb9003de0daad5bd5b85661aa8c6'
    const privateKey = 'bcf8c4df391cd74710d33f021b7fc039b51355f0'
    const hash = CryptoJS.MD5(`${timeStamp}${publicKey}${privateKey}`)
    console.log(hash)
    const url = `v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`
    
    try {
        const response: AxiosResponse = await API.get(url)
        const data: ResponseProps = response.data
       
        return data
    } catch (error) {
        console.log(error)
    }
}



export default API