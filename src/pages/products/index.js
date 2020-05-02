import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useSelector } from 'react-redux'
import { colors } from '~/styles/colors'
import { Background } from './style'


export default function ProductsPage() {
	const currentUser = useSelector(state => state.user.currentUser)

	return (
		<Background>
			<StatusBar
				barStyle="light-content"
				backgroundColor={colors.secundary}
			/>

			<Text>Current: { currentUser.displayName }</Text>
		</Background>
	);
}
