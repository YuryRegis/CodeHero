 import { RFValue } from 'react-native-responsive-fontsize'


const spacing = {
    s: RFValue(12),
    m: RFValue(18),
    l: RFValue(24),
    ml: RFValue(30),
    xl: RFValue(60),
}

const colors = {
    textAlternative: '#D42026',
    playButton: '#D20A0A',
    background: '#D42026',
    borderBox: '#A5A5A5',
    text: '#4E4E4E ',
    white: '#FFF',
}

const metrics = {
    body: RFValue(16),
    text: RFValue(21),
    title: RFValue(16),
    avatar: RFValue(58),
    input: {
        height: RFValue(31),
        width: RFValue(250),
    },
    section: {
        titleHeight: RFValue(37),
        bodyHeight:  RFValue(112),
    },
    counter: {
        size: RFValue(32),
        text:  RFValue(21)
    },
    line: {
        width: RFValue(54),
        height: RFValue(4),
    },
    playButton: {
        height:  RFValue(16),
        width:  RFValue(12)
    }
}

const font = {
    bold: 'Roboto-Black',
    light: 'Roboto-Light',
    regular: 'Roboto-Regular',
}

export default {
    title: 'default',
    spacing,
    metrics,
    colors,
    font
}