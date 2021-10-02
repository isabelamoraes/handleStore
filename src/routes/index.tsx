import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { Cart } from '../screens/Cart';

const { Navigator, Screen } = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen
                    name="Home"
                    component={Home}
                />

                <Screen
                    name="Cart"
                    component={Cart}
                />
            </Navigator>
        </NavigationContainer>
    )
}