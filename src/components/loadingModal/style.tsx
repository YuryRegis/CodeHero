import styled from 'styled-components/native';
import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window')

export const Container = styled.View`
    position: absolute;
    
    width: ${width}px;
    height: ${height}px;

    z-index: 1;

    background:  rgba(212, 32, 38, .7);
`

export const ActivityContainer = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`