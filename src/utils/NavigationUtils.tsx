import { Alert, Linking } from "react-native";


export  function openURL( url:string) {
      Linking.openURL(url);
}

export async function isCanOpenTheUrl(url:string):Promise<Boolean>
{
    const supported = await Linking.canOpenURL(url);
    return supported
}