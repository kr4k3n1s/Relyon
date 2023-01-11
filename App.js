/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {useFonts} from 'expo-font';
import {View, TouchableOpacity, Image, Text, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useHeaderHeight} from '@react-navigation/stack';

import HomeScreen from './UIFramework/screens/HomeScreen';
import ExploreScreen from './UIFramework/screens/ExploreScreen';
import CommunityScreen from './UIFramework/screens/CommunityScreen';
import {assets, COLORS} from './UIFramework/constants';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const HeaderViewComponent = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'transparent'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 70,
          paddingTop: 20,
          backgroundColor: 'transparent',
        }}>
        <View style={{height: 50, width: 120}}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'center',
            }}
            source={require('./assets/images/relyon.png')}
          />
        </View>
        <TouchableOpacity style={{paddingRight: 35}}>
          <Image
            source={require('./UIFramework/assets/icons/menuDots.png')}
            style={{resizeMode: 'contain', width: 17}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const TabIcon = ({selected, image, imageSelected}) => {
  return (
    <View style={{height: '100%', backgroundColor: 'blue'}}>
      <View
        style={{
          width: 30,
          height: 30,
          backgroundColor: 'red',
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
          source={selected ? imageSelected : image}
        />
        {selected.children}
      </View>

      {/* <Text>{selected ? 'focused' : 'unfocused'}</Text> */}
    </View>
  );
};

const TabIconComponent = ({selected, image, imageSelected}) => {
  return (
    <View style={{height: '100%', paddingTop: 15}}>
      <View
        style={{
          width: 30,
          height: 30,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
            tintColor: selected ? COLORS.tertiary : 'lightgrey',
          }}
          source={selected ? imageSelected : image}
        />
        <View
          style={{
            width: 6,
            height: 6,
            borderRadius: 44 / 2,
            backgroundColor: COLORS.tertiary,
            margin: 3,
            display: selected ? 'flex' : 'none',
          }}
        />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          headerTransparent: false,
          tabBarStyle: {
            borderTopWidth: 0,
          },
        }}
        initialRouteName="HomeScreen">
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIconComponent
                selected={focused}
                imageSelected={assets.homeSelected}
                image={assets.home}
              />
            ),
            tabBarShowLabel: false,
            header: props => <HeaderViewComponent />,
          }}
        />
        <Tab.Screen
          name="ExploreScreen"
          component={ExploreScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <TabIconComponent
                selected={focused}
                imageSelected={assets.foodSelected}
                image={assets.food}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="DashboardScreen"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIconComponent
                selected={focused}
                imageSelected={assets.dashboardSelected}
                image={assets.dashboard}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="CommunityScreen"
          component={CommunityScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <TabIconComponent
                selected={focused}
                imageSelected={assets.communitySelected}
                image={assets.community}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TabIconComponent
                selected={focused}
                imageSelected={assets.profileSelected}
                image={assets.profile}
              />
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
