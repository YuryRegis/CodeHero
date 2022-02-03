import { FlatList } from 'react-native'
import { getAllHeroes } from '../../services'
import { Header, Footer } from './components'
import { LoadingModal } from '../../components'
import React, {useState, useEffect} from 'react'
import { 
    Text,
    Avatar,
    Container, 
    RowContainer, 
    CardContainer 
} from './style'


export const Home: React.FC = () => {
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [offset, setOffset] = useState<number>(0)
    const [count, setCount] = useState<number>(0)
    const [data, setData] = useState<any[]>() 
   
    async function getHeroesHandler() {
        try {
            const { data: dataMarvel } = await getAllHeroes(offset)
            setCount(_ => dataMarvel.total)
            setData(_ => dataMarvel.results)  
        } catch(error) {

        }
        finally {
            setIsLoading(_ => false)
        }
    }

    function RightButtonAction() {
        if(currentPage === data!.length) return
        setIsLoading(_ => true)
        setOffset(oldState => oldState + 4)
        setCurrentPage(oldState => oldState + 1)
    }

    function LeftButtonAction() {
        if(currentPage===1) return
        const _offset = offset===0 ? 0 : offset-4
        
        setIsLoading(_ => true)
        setOffset(_ => _offset)
        setCurrentPage(oldState => oldState - 1)
    }

    function pageButtonAction(currentPageState: number) {
        const _offset = (currentPageState-1) * 4
        
        setIsLoading(_ => true)
        setOffset(_ => _offset)
        setCurrentPage(_ => currentPageState)
    }

    async function onRefresh() {
        setIsRefreshing(_ => true)
        setCurrentPage(_ => 1)
        await updateData()
        setIsRefreshing(_ => false)
    }

    async function searchAction(name: string) {
        setIsLoading(_ => true)
        if(name === '')
            return updateData()
        try {
            const {data: dataMarvel} = await getAllHeroes(0, name)
            setCount(_ => dataMarvel.total)
            setData(_ => dataMarvel.results)
       } catch(error) {
           console.log(error)
       } finally {
           setIsLoading(_ => false)
       }
    }

    async function updateData(name?: string) {
        try {
            const {data: dataMarvel} = await getAllHeroes(offset)
            setCount(_ => dataMarvel.total)
            setData(_ => dataMarvel.results)
       } catch(error) {
           console.log(error)
       } finally {
           setIsLoading(_ => false)
       }
    }
    
    useEffect(() => {
        updateData()
    },[offset])

    useEffect(() => {
        setIsLoading(_ => true)
        getHeroesHandler()
    },[]) 

    return (
       <Container>
           {isLoading && <LoadingModal/>}

           <Header searchAction={searchAction}/>
           
           <FlatList 
            data={data}
            onRefresh={onRefresh}
            refreshing={isRefreshing}
            keyExtractor={(item, _) => `${item.id}`}
            ListFooterComponent={() => <Footer 
                    currentPage={currentPage}
                    numberOfPages={Math.ceil(count/4)} 
                    pageButtonAction={pageButtonAction}
                    rightButtonAction={RightButtonAction}
                    leftButtonAction={LeftButtonAction}
                />}
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