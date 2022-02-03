import React from 'react'
import { SafeArea } from './style'
import theme from './src/styles/theme'
import StackNavigator from './src/routes'
import { ThemeProvider } from 'styled-components/native'


const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <SafeArea >
        <StackNavigator/>
      </SafeArea>
    </ThemeProvider>
  )
}

export default App
