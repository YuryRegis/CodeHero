import { FlatList } from 'react-native'
import React, {useContext, useState, useEffect} from 'react'
import {ThemeContext} from 'styled-components/native'
import {LeftArrow, RightArrow} from '../../../../assets/icons'
import { 
    Counter,
    Content,
    Container,
    PageButton,
    Pagination,
    RowContainer,
    LeftButtonCanvas,
    RightButtonCanvas,
    ListButtons,
} from './style'


interface IFooter {
    limit?: number;
    currentPage?: number;
    numberOfPages?: number;
    leftButtonAction?: () => void;
    rightButtonAction?: () => void;
    pageButtonAction?: () => Promise<void>;
}


const Footer: React.FC<IFooter> = ({
    currentPage = 1,
    numberOfPages = 1,
    pageButtonAction = () => {},
    leftButtonAction = () => {},
    rightButtonAction = () => {},
}) => {
    const { colors, metrics } = useContext(ThemeContext)
    const [ pages, setPages ] = useState<number[]>([])
    const [ currentPageState, setCurrentPageState ] = useState<number>(currentPage)

    function RightButtonHandler() {
        if(currentPageState === numberOfPages) return
        setCurrentPageState(currentState => currentState+1)
        rightButtonAction()
    }

    function LeftButtonHandler() {
        if(currentPageState === 1) return
        setCurrentPageState(currentState => currentState-1)
        leftButtonAction()
    }

    function pageButtonHandler(item: number) {
        setCurrentPageState(_ => item)
        pageButtonAction(item)
    }

    useEffect(() => {
        let _pages: number[] = []
        for (let i=1; i<=numberOfPages; i++) {
            _pages.push(i)
        }
        setPages(_ => _pages)
    },[])

    return (
        <Container>
            <RowContainer>
                <Content>
                    <Pagination>

                        <LeftButtonCanvas onPress={LeftButtonHandler}>
                            <LeftArrow 
                                fill={colors.background}
                                width={metrics.playButton.width}
                                height={metrics.playButton.height}
                            />
                        </LeftButtonCanvas>

                        <ListButtons>
                        <FlatList 
                            horizontal
                            data={pages}
                            extraData={pages}
                            keyExtractor={(item, _) => `page_${item}`}
                            renderItem={({item, index}) => (
                                <RowContainer>
                                    <PageButton 
                                        isSelected={item===currentPageState} 
                                        isLastItem={DataView.length-1 === index}
                                        onPress={() => pageButtonHandler(item)}
                                    >
                                        <Counter isSelected={item===currentPageState}>{item}</Counter>
                                    </PageButton>
                                </RowContainer>
                            )}
                        />
                        </ListButtons>

                        <RightButtonCanvas onPress={RightButtonHandler}>
                            <RightArrow 
                                fill={colors.background}
                                width={metrics.playButton.width}
                                height={metrics.playButton.height}
                            />
                        </RightButtonCanvas>

                    </Pagination>
                </Content>
            </RowContainer>
        </Container>
    )
}

export default Footer