import React from 'react'
import homeLocale from '../../../../locale'
import { getDeviceLanguage } from '../../../../utils'
import {
    Container, Label, TextInput
} from './style'


const deviceLanguage = getDeviceLanguage()
const locale = deviceLanguage==='pt_BR' ? homeLocale.ptBR : homeLocale.enUS

const Input: React.FC = () => {
    return (
        <Container>
            <Label>{locale.home.input.label}</Label>
            <TextInput />
        </Container>
    )
}

export default Input