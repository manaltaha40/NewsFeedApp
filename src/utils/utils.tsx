import moment from 'moment';
import {Linking } from "react-native";
import { News } from '../data/Interfaces';
import { strings } from '../locale/strings';
import RNRestart from 'react-native-restart';

let urlRegex =  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

export function formatDate(inputDate:string):string{
    return moment(inputDate).format('LLL')
}
export function checkVaildUrl(inputString:string):Boolean{
    if (inputString)
        return urlRegex.test(inputString);
    else
     return false ; 
}

export  function openURL( url:string) {
    Linking.openURL(url);
}

export async function isCanOpenTheUrl(url:string):Promise<Boolean>
{
  const supported = await Linking.canOpenURL(url);
  return supported
}
export const searchInArray = (query:string , originalArray:News[]):News[]=>{
    let searchKey = query.toLowerCase().trim()
    if(searchKey.length > 0){
      let filterdData = originalArray.filter((atrical:News) => 
        atrical.title.toLowerCase().trim().includes(searchKey))
     return filterdData
    }
    else
      return originalArray
  }
export const changeLaguage = (languageKey:string) => {
    strings.setLanguage(languageKey)
    //RNRestart.Restart();
} 
export const getCurrentDispledLaguage = ():string => {
        return strings.getLanguage();
} 