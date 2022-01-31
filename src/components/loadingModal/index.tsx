import { Container } from './style'
import React, {useContext} from 'react'
import { ActivityIndicator } from 'react-native'
import { ThemeContext } from 'styled-components'


const LoadingModal: React.FC = () => {
    const { colors } = useContext(ThemeContext)
    return (
        <Container>
            <ActivityIndicator size="large" color={colors.white} />
        </Container>
    )
}

export default LoadingModal