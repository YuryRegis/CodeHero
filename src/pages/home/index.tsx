import React from 'react'
import homeLocale from '../../locale'
import { getDeviceLanguage } from '../../utils'
import {
    Container,
} from './style'

const deviceLanguage = getDeviceLanguage()
const locale = deviceLanguage==='pt_BR' ? homeLocale.ptBR : homeLocale.enUS

export const Home: React.FC = () => {
   return (
       <Container>

       </Container>
   )
}

export default Home