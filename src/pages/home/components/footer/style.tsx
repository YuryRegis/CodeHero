import styled from 'styled-components/native'
import { LeftArrow, RightArrow } from '../../../../assets/icons'


interface IPageButton {
    isSelected: boolean;
    isLastItem?: boolean;
}

export const Container = styled.View`
    flex: 1;
    padding-top: ${({theme}) => theme.spacing.m}px;
    padding-bottom:  ${({theme}) => theme.spacing.l}px;
`

export const RowContainer = styled.View`
    flex-direction: row;
`

export const Content = styled(RowContainer)`
    align-items: center;
    justify-content: center;
    
    width: 100%;
    
    padding: 0 ${({theme}) => theme.spacing.ml}px;
`

export const Pagination = styled(Content)`
    padding: 0;
`

export const ListButtons = styled.View`
    justify-content: space-between;

    max-width: ${({theme}) => ((theme.metrics.playButton.width + theme.spacing.m)*4.4)}px;
`

export const Counter = styled.Text<IPageButton>`
    font-family: ${({theme}) => theme.font.regular};
    font-size: ${({theme}) => theme.metrics.counter.text}px;

    color: ${({theme, isSelected}) => isSelected 
        ? theme.colors.white
        : theme.colors.background };
`

export const PageButton = styled.TouchableOpacity<IPageButton>`
    width: ${({theme}) => theme.metrics.counter.size}px;
    height: ${({theme}) => theme.metrics.counter.size}px;

    margin-right: ${({theme}) => theme.spacing.m}px;

    align-items: center;
    justify-content: center;

    background: ${({theme, isSelected}) => isSelected 
        ? theme.colors.background
        : theme.colors.white };

    border-radius: ${({theme}) => theme.metrics.counter.size/2}px;
    border-color: ${({theme}) => theme.colors.background};
    border-width: 1px;
`

export const LeftButtonCanvas = styled.TouchableOpacity`
    height: ${({theme}) => theme.metrics.playButton.height}px;
    width: ${({theme}) => theme.metrics.playButton.width}px;

    margin-right: ${({theme}) => theme.spacing.xl}px;
`

export const RightButtonCanvas = styled(LeftButtonCanvas)`
    margin-right: 0;
    margin-left: ${({theme}) => theme.spacing.xl}px;
`