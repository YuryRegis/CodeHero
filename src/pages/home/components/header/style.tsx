import styled from 'styled-components/native'
import theme from '../../../../styles/theme'

export const Container = styled.View`
    padding-top: ${theme.spacing.l-4}px;

    justify-content: center;
    align-items: center;
`

export const RowContainer = styled.View`
    flex-direction: row;
    width: ${({theme}) => theme.metrics.input.width}px;
`

export const Title = styled.Text`
    font-size: ${({theme}) => theme.metrics.title}px;
    font-family: ${({theme}) => theme.font.bold};

    line-height: ${({theme}) => theme.metrics.title*2}px;

    color: ${({theme}) => theme.colors.textAlternative};
`

export const SubTitle = styled(Title)`
    font-family: ${({theme}) => theme.font.regular};
`

export const RedLine = styled.View`
    width: ${({theme}) => theme.metrics.line.width}px;
    height: ${({theme}) => theme.metrics.line.height}px;

    background: ${({theme}) => theme.colors.background};
`

export const RedBox = styled.View`
    width: 100%;
    height: ${({theme}) => theme.metrics.section.titleHeight}px;

    justify-content: center;

    background: ${({theme}) => theme.colors.background};
`

export const Label = styled.Text`
    font-size: ${({theme}) => theme.metrics.body}px;
    font-family: ${({theme}) => theme.font.regular};

    color: ${({theme}) => theme.colors.white};

    margin-left: ${({theme}) => theme.metrics.avatar + theme.spacing.l+1}px;
`