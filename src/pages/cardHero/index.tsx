import React,{useRef, useState} from 'react'
import { Animated, View } from 'react-native'
import {
    Card,
    Label,
    HeroName,
    FlipCard,
    Container,
    Description,
    SummaryView,
    ImageRegular,
    RowContainer,
    TouchableView,
    TitleContainer,
} from './style'


const CardHero: React.FC = ({route}) => {
    const [isFlipped, setIsFlipped] = useState<boolean>(false)

    const { item } = route.params
    const animate = useRef(new Animated.Value(0))

    const interpolateFrontCard = animate.current.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '-180deg']
      })

    const interpolateBackCard = animate.current.interpolate({
       inputRange: [0, 180],
       outputRange: ['-180deg', '0deg']
      })

    function flipHandler() {
        Animated.timing(animate.current, {
          toValue: isFlipped ? 0 : 180,
          duration: 300,
          useNativeDriver: true
        }).start(() => setIsFlipped(prevState => !prevState))
      }

    return (
        <Container>
            <TouchableView onPress={flipHandler}>
                <Animated.View style={[{transform: [{rotateY: interpolateFrontCard}]}, FlipCard.BackCard]}>
                    <Card>
                        
                        <ImageRegular source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }}/>

                        <TitleContainer>
                            <HeroName>{item.name}</HeroName>
                        </TitleContainer>

                        <SummaryView>
                            <Description>{item.description}</Description>
                        </SummaryView>

                    </Card>
                </Animated.View>
                    
                <Animated.View style={[FlipCard.FrontCard, {transform: [{rotateY: interpolateBackCard}]}]}>
                        <Card>
                            <RowContainer>
                                <Label>Available events:</Label>
                            </RowContainer>
                            
                            <RowContainer>
                                <Description>{item.events.available}</Description>
                            </RowContainer>
                            
                            <RowContainer>
                                <Label>Available series:</Label>
                            </RowContainer>
                            
                            <RowContainer>
                                <Description>{item.series.available}</Description>
                            </RowContainer>

                            <RowContainer>
                                <Label>Available comics:</Label>
                            </RowContainer>
                            
                            <RowContainer>
                                <Description>{item.comics.available}</Description>
                            </RowContainer>

                            <RowContainer>
                                <Label>Available stories:</Label>
                            </RowContainer>
                            
                            <RowContainer>
                                <Description>{item.stories.available}</Description>
                            </RowContainer>

                            <RowContainer>
                                <Label>Comics:</Label>
                            </RowContainer>
                            
                            <RowContainer>
                                <Description>{item.comics.items.map(item => item.name)}</Description>
                            </RowContainer>
                        </Card>
                </Animated.View>
            </TouchableView>
        </Container>
    )
}   


export default CardHero