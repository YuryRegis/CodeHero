import React, {useState} from 'react'
import homeLocale from '../../../../locale'
import { getDeviceLanguage } from '../../../../utils'
import {
    Container, Label, TextInput
} from './style'


interface IInput {
    searchAction: (name: string) => void;
}


const deviceLanguage = getDeviceLanguage()
const locale = deviceLanguage==='pt_BR' ? homeLocale.ptBR : homeLocale.enUS

const Input: React.FC<IInput> = ({searchAction}) => {
    const [inputData, setInputData] = useState<string>('')

    function searchHandler() {
        searchAction(inputData)
    } 

    return (
        <Container>
            <Label>{locale.home.input.label}</Label>
            <TextInput 
                value={inputData}
                returnKeyType='search'
                onChangeText={setInputData}
                onSubmitEditing={searchHandler}
            />
        </Container>
    )
}

export default Input