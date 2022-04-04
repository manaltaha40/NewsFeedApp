
import {  DefaultTheme } from '@react-navigation/native';
export const CustomLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      loadingColor :'#5500dc',
      hintColor:'#656060',
      linkColor:'blue',
      redColor:'#D42F38',
      textColor:'#404242',
      searchBarBg:'white'
    },
  };