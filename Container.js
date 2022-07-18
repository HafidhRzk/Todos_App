import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'native-base';

import Calculator from './src/screens/calculator';
import Todos from './src/screens/todos';

const Tab = createBottomTabNavigator();

export default function Container() {
  const theme = useTheme();
  
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Calculator"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name == 'Calculator') {
              iconName = focused ? 'ios-calculator' : 'ios-calculator-outline';
            } else if (route.name == 'Todos') {
              iconName = focused
                ? 'md-apps'
                : 'md-apps-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme.colors.error['500'],
          tabBarInactiveTintColor: 'gray', 
        })}>
        <Tab.Screen name="Calculator" component={Calculator} options={{headerShown: false}}/>
        <Tab.Screen name="Todos" component={Todos} options={{headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
    // <Todos />
  );
}