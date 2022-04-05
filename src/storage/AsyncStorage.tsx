import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key:string ,value:string) => {
    try {
      await AsyncStorage.setItem(key, value)
      console.log(`storeData ${value}`);
    } catch (e) {
        console.log(e);
    }
  }

  
export const getData = async (key:string):Promise<string> => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value!==null)
        return value
        else
        return ''
    } catch(e) {
      console.log(e);
      return ''
    }
  }
  