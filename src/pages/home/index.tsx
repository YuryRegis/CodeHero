import { Container } from './style'
import { Header } from './components'
import homeLocale from '../../locale'
import { getAllHeroes } from '../../services'
import { getDeviceLanguage } from '../../utils'
import { LoadingModal } from '../../components'
import React, {useState, useEffect} from 'react'


const deviceLanguage = getDeviceLanguage()
const locale = deviceLanguage==='pt_BR' ? homeLocale.ptBR : homeLocale.enUS

export const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [data, setData] = useState() 
   
    async function getHeroesHandler() {
        try {
            const response = await getAllHeroes()
            setData(_ => response)  
        } catch(error) {

        }
        finally {
            setIsLoading(_ => false)
        }
    }
    
    useEffect(() => {
        console.log('data', data)
    },[data])

    useEffect(() => {
        setIsLoading(_ => true)
        getHeroesHandler()
    },[])

    return (
       <Container>
           
           <Header />
       </Container>
    )
}

export default Home