import React from 'react'
import { FlatList } from 'react-native'
import { Input } from '../../components'
import homeLocale from '../../../../locale'
import {
    Label,
    RedLine,
    RedBox,
    Container,
    RowContainer,
    Title,
    SubTitle,
} from './style'
import { getDeviceLanguage } from '../../../../utils'


const deviceLanguage = getDeviceLanguage()
const locale = deviceLanguage==='pt_BR' ? homeLocale.ptBR : homeLocale.enUS

const Header: React.FC = () => {
   return (
      <Container>
          <RowContainer>
            <Title>{locale.home.header.title}</Title>
            <SubTitle>{locale.home.header.description}</SubTitle>
          </RowContainer>
          
          <RowContainer>
            <RedLine />
          </RowContainer>

          <Input />

          <RedBox>
              <RowContainer>
                <Label>{locale.home.section.title}</Label>
              </RowContainer>
          </RedBox>
      </Container>
   )
}

export default Header