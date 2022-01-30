import React from 'react'
import { Home } from './src/pages'
import { SafeArea } from './style'
import theme from './src/styles/theme'
import { ThemeProvider } from 'styled-components/native'


const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <SafeArea >
        <Home/>
      </SafeArea>
    </ThemeProvider>
  )
}

export default App
