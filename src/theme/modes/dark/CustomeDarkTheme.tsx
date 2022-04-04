import { DarkTheme } from '@react-navigation/native';
export const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      loadingColor :'#5500dc',
      hintColor:'#D6D7DB',
      linkColor:'blue',
      redColor:'#E2383F',
      textColor:'#CED4D6',
      searchBarBg:'white'
    },
  };