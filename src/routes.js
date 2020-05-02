import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from './styles/colors'

import LoginPage from '~/pages/login';
import ProductsPage from '~/pages/products';
import SplashScreen from '~/pages/splash';

const Stack = createStackNavigator();

export default function Routes() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Splash"
					component={SplashScreen}
					options={{ headerShown: false }}
				/>

				<Stack.Screen
					name="Login"
					component={LoginPage}
					options={{ headerShown: false }}
				/>


				<Stack.Screen
					name="Produtos"
					component={ProductsPage}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}