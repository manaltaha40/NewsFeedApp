
import React from 'react';
import { useColorScheme } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Routes from './Routes';
import HomeScreen from '../screens/home/HomeScreen';
import DetailedScreen from '../screens/details/DetailedScreen';
import { CustomLightTheme } from '../theme/modes/light/CustomLightTheme';
import { CustomDarkTheme } from '../theme/modes/dark/CustomeDarkTheme';
import { strings } from '../locale/strings';
import Tabs from './Taps';

  
  const StackNaivgatior = createNativeStackNavigator();
  
  const AppNavigation = () => {
    const scheme = useColorScheme();
    return (
      <NavigationContainer theme={scheme === 'dark' ? CustomDarkTheme: CustomLightTheme}>
        <StackNaivgatior.Navigator initialRouteName={Routes.Taps}>
          <StackNaivgatior.Screen
            name={Routes.Taps}
            component={Tabs}
            options={{
              headerShown: false
            }}
          />
          <StackNaivgatior.Screen
            name={Routes.DetailedScreen}
            component={DetailedScreen}
            options={{
                headerShown: true,
                title:strings.detailedScreenTitle
            }}
          />
        </StackNaivgatior.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigation;
  