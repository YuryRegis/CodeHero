import { Header } from './components'
import homeLocale from '../../locale'
import { FlatList } from 'react-native'
import { getAllHeroes } from '../../services'
import { getDeviceLanguage } from '../../utils'
import { LoadingModal } from '../../components'
import React, {useState, useEffect} from 'react'
import { 
    Text,
    Avatar,
    Container, 
    RowContainer, 
    CardContainer 
} from './style'


const deviceLanguage = getDeviceLanguage()
const locale = deviceLanguage==='pt_BR' ? homeLocale.ptBR : homeLocale.enUS

export const Home: React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [offset, setOffset] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const [data, setData] = useState() 
   
    async function getHeroesHandler() {
        try {
            const { data: dataMarvel } = await getAllHeroes(offset)
            setOffset(oldOffset => oldOffset + 4)
            setCount(_ => dataMarvel.count)
            setData(_ => dataMarvel.results)  
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
           {isLoading && <LoadingModal/>}

           <Header />
           
           <FlatList 
            data={data}
            keyExtractor={(item, _) => `${item.id}`}
            renderItem={({item}) => (
                <CardContainer>
                    <RowContainer>
                        <Avatar source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                        <Text>{item.name}</Text>
                    </RowContainer>
                </CardContainer>
            )}
           />
       </Container>
    )
}

export default Home