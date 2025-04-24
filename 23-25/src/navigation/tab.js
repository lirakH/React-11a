import React from 'react';
import Home from "../screens/HomeScreen";
import IOS from "../screens/IOS";
import Samsung from "../screens/Samsung";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BotomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#22D4FF',
                showLabel: false,
                tabBarStyle: {
                    backgroundColor: '#384053',
                },
                labelStyle: {
                    fontSize: 12,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    )
                }}
            />
             <Tab.Screen
                name="IOS"
                component={IOS}
                options={{
                    tabBarLabel: 'IOS',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="apple" color={color} size={26} />
                    ),
                }}
            />
             <Tab.Screen
                name="Samsung"
                component={Samsung}
                options={{
                    tabBarLabel: 'Samsung',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                      )
                }}
                />
        </Tab.Navigator>
    )
}

export default BotomTab;