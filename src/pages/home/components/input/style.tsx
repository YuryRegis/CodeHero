import styled from 'styled-components/native';


export const Container = styled.View`
    margin: ${({theme}) => theme.spacing.ml}px 0;
    width: ${({ theme }) => theme.metrics.input.width}px;
`

export const Label = styled.Text`
    color: ${({ theme }) => theme.colors.textAlternative};
    font-family: ${({ theme }) => theme.font.regular};
    font-size: ${({ theme }) => theme.metrics.body}px;
    line-height: ${({ theme }) => theme.metrics.body+3}px;
`
export const TextInput = styled.TextInput`
    width: 100%;
    height: ${({ theme }) => theme.metrics.input.height}px;

    font-family: ${({ theme }) => theme.font.regular};
    font-size: ${({ theme }) => theme.metrics.body}px;
    
    padding: 0 10px;
    color: ${({ theme }) => theme.colors.text};

    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.borderBox};

    margin-bottom: ${({ theme }) => theme.spacing.s}px;
`