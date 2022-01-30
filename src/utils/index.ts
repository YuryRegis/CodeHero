import { NativeModules, Platform } from 'react-native';


const getDeviceLanguage = () => {
    const deviceLanguage: string = Platform.OS === 'ios'
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] 
            : NativeModules.I18nManager.localeIdentifier;

    console.log(deviceLanguage);
    
    return deviceLanguage
}


export {
    getDeviceLanguage,
}