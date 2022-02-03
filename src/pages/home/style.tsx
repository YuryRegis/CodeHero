import styled from 'styled-components/native'


export const Container = styled.View`
    flex: 1;
    background: ${({theme}) => theme.colors.white};

    border-color: ${({theme}) => theme.colors.background};
    border-bottom-width: ${({theme}) => theme.spacing.s}px;
`

export const CardContainer = styled.View`

`

export const RowContainer = styled.View`
    flex-direction: row;
    align-items: center;

    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.background};
`

export const Text = styled.Text`
    color: ${({theme}) => theme.colors.text};

    font-size: ${({theme}) => theme.metrics.text}px;
    font-family: ${({theme}) => theme.font.regular};
`

export const Avatar = styled.Image`
    width: ${({theme}) => theme.metrics.avatar}px;
    height: ${({theme}) => theme.metrics.avatar}px;

    border-radius: ${({theme}) => theme.metrics.avatar/2}px;

    margin: ${({theme}) => theme.spacing.m}px;
`