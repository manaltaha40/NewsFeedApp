
  import React from 'react';
  import {NavigationContainer} from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  import Routes from './Routes';
import HomeScreen from '../screens/home/HomeScreen';
import DetailedScreen from '../screens/details/DetailedScreen';
import Colors from '../utils/Colors';

  
  const StackNaivgatior = createNativeStackNavigator();
  const HomeScreenTitle = 'News Main Screen'
  const DetailedScreenTitle = 'News Detailed Screen'
  const AppNavigation = () => {
    return (
      <NavigationContainer>
        <StackNaivgatior.Navigator initialRouteName={Routes.Home}>
          <StackNaivgatior.Screen
            name={Routes.Home}
            component={HomeScreen}
            options={{
              headerShown: true,
              headerStyle: {backgroundColor: Colors.appBackground},
              title: HomeScreenTitle,
            }}
          />
          <StackNaivgatior.Screen
            name={Routes.DetailedScreen}
            component={DetailedScreen}
            options={{
                headerShown: true,
                headerStyle: {backgroundColor: Colors.appBackground},
                title:DetailedScreenTitle 
            }}
          />
        </StackNaivgatior.Navigator>
      </NavigationContainer>
    );
  };
  
  export default AppNavigation;
  