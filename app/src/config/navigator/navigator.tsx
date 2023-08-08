import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { NavigationContainer } from '@react-navigation/native'
import { Feather, Entypo } from '@expo/vector-icons'
import { Profile } from '../../screens/profile'
import { Saved } from '../../screens/saved'
import { Home } from '../../screens/home'

const Tab = createBottomTabNavigator()

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            bottom: 12,

            borderRadius: 20,
            width: '95%',
            left: '2.5%',
            right: '2.5%',
            alignSelf: 'center',
            marginHorizontal: 'auto',
            position: 'absolute',
            backgroundColor: '#FFF',
            height: 70,
            borderTopColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
          },
          tabBarInactiveTintColor: '#7D8588',
          tabBarActiveTintColor: '#6246EA',
          tabBarItemStyle: {
            paddingVertical: 14,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
            letterSpacing: -0.06,
          },
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="user" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Search"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="search" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Favoritos"
          component={Saved}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="framer" size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="Config"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="more-vertical" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
