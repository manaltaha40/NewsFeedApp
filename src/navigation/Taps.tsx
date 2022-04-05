import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import Routes from './Routes';
import { strings } from '../locale/strings';
import { View,Image } from 'react-native';
import { useTheme } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const Tabs = () =>{
    const { colors } = useTheme();
  return (
    <Tab.Navigator screenOptions= {({ route }) => ({
        tabBarActiveTintColor: colors.tabBarActiveTintColor,
        tabBarInactiveTintColor: colors.tabBarInactiveTintColor,
    })}>
      <Tab.Screen 
        name={Routes.Home}
        component={HomeScreen}
        options={{
            headerShown: true,
            title: strings.homeScreenTitle,
            tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Image
                      source={require("../assets/ic_home.png")}
                      resizeMode="contain"
                      style={{ width: 40 }}
                    />
                  </View>
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
                tabBarIcon: ({ focused }) => {
                    return (
                      <View>
                        <Image
                          source={require("../assets/ic_settings.png")}
                          resizeMode="contain"
                          style={{ width: 40 }}
                        />
                      </View>
                    );
                  }
              }}/>
    </Tab.Navigator>
  );
}
export default Tabs;
//tabBar={(props) => <TabBar{...props}/>}