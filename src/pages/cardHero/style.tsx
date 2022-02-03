import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'


export const FlipCard = StyleSheet.create({
    FrontCard: {
        backfaceVisibility: 'hidden',
    },
    BackCard: {
        backfaceVisibility: 'hidden',
        position: 'absolute',
    },
})

export const Container = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`

export const Card = styled.View`
    width: ${({theme}) => theme.metrics.card.width}px;
    height: ${({theme}) => theme.metrics.card.height}px;

    padding: ${({theme}) => theme.spacing.m}px;

    border-radius: 9px;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.borderBox};
`

export const TouchableView = styled.TouchableOpacity`
`

export const ImageRegular = styled.Image`
    width: 100%;
    height: ${({theme}) => theme.metrics.card.image.regular.height}px;

    margin-bottom: ${({theme}) => theme.spacing.m}px;

    border-radius: 9px;
`

export const RowContainer = styled.View`
    flex-direction: row;
    max-height: ${({theme}) => theme.metrics.section.bodyHeight}px
    width: 100%;
`

export const TitleContainer = styled(RowContainer)`
    justify-content: center;
    align-items: center;

    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.background};
`

export const HeroName = styled.Text`
    font-family: ${({theme}) => theme.font.bold};
    font-size: ${({theme}) => theme.metrics.card.fontSize.title}px;

    color: ${({theme}) => theme.colors.textAlternative};
`

export const SummaryView = styled.ScrollView`
    width: 100%;
    max-height: ${({theme}) => theme.metrics.card.image.regular.height/2}px;

    margin-top: ${({theme}) => theme.spacing.m}px;
`

export const Description = styled.Text`
    font-family: ${({theme}) => theme.font.regular};
    font-size: ${({theme}) => theme.metrics.card.fontSize.text}px;

    color: ${({theme}) => theme.colors.text};
`

export const Label = styled(HeroName)`
    font-size: ${({theme}) => theme.metrics.card.fontSize.text}px;
    
    margin-bottom: ${({theme}) => theme.spacing.m/2}px;
    margin-top: ${({theme}) => theme.spacing.m/2}px;
` 