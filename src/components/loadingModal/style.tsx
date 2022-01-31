import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window')

export const Container = styled.View`
    display: absolute;

    width: ${width}px;
    height: ${height}px;

    justify-content: center;
    align-items: center;

    background: rgba(212, 32, 38, .3);
`