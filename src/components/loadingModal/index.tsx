import React, {useContext} from 'react'
import { ActivityIndicator } from 'react-native'
import { ThemeContext } from 'styled-components'
import { Container, ActivityContainer } from './style'


const LoadingModal: React.FC = () => {
    const { colors } = useContext(ThemeContext)
    return (
        <Container>
            <ActivityContainer>
                <ActivityIndicator size="large" color={colors.white} />
            </ActivityContainer>
        </Container>
    )
}

export default LoadingModal