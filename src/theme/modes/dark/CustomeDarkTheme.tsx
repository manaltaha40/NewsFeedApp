import { DarkTheme } from '@react-navigation/native';
export const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      loadingColor :'#5500dc',
      hintColor:'#D6D7DB',
      linkColor:'#005EA5',
      redColor:'#E2383F',
      textColor:'#CED4D6',
      searchBarBg:'#797979',
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor: 'white',
      btnActive:"#841584",
      btnInactive:"#D6D7DB"
    },
  };