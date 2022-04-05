import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import Routes from './Routes';
import { strings } from '../locale/strings';
import { useTheme } from '@react-navigation/native';
import TapBarIcon from '../components/TapBarIcon';


const Tab = createBottomTabNavigator();

const Tabs = () =>{
    const { colors } = useTheme();
  return (
    <Tab.Navigator screenOptions= {() => ({
        tabBarActiveTintColor: colors.tabBarActiveTintColor,
        tabBarInactiveTintColor: colors.tabBarInactiveTintColor,
    })}>
      <Tab.Screen 
        name={Routes.Home}
        component={HomeScreen}
        options={{
            headerShown: true,
            title: strings.homeScreenTitle,
            tabBarIcon: () => {
                return (
                  <TapBarIcon source={require("../assets/ic_home.png")}/>
                );
              },
          }} 
          />
      <Tab.Screen 
            name= {Routes.Settings} 
            component={SettingsScreen} 
            options={{
                headerShown: true,
                title: strings.settingsScreenTitle,
                tabBarIcon: () => {
                    return (
                      <TapBarIcon source={require("../assets/ic_settings.png")}/>
                    );
                  }
              }}/>
    </Tab.Navigator>
  );
}
export default Tabs;
