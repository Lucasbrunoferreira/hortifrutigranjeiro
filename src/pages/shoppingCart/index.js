import React from 'react';
import { TouchableOpacity, Text, StatusBar } from 'react-native';
import { useSelector } from 'react-redux'
import { colors } from '~/styles/colors'
import { Background } from './style'
import { useDispatch } from 'react-redux'


export default function ShoppingCartPage({ navigation }) {
	const dispatch = useDispatch()
	const currentUser = useSelector(state => state.user.currentUser)

	return (
		<Background>
			<StatusBar
				barStyle="light-content"
				backgroundColor={colors.secundary}
			/>

			<Text>Carrinho de compras</Text>
		</Background>
	);
}
