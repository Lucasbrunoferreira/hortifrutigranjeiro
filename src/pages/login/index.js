import React, { useState } from 'react';
import { showMessage, } from 'react-native-flash-message';
import { View, Text, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { colors } from '~/styles/colors'
import { Background, Title, Input, FormWrapper, SubmitButtonText, GuestButtonText } from './style'
import { authentication } from '~/services/user'
import { setCurrentUser } from '~/store/ducks/user'
import { useDispatch } from 'react-redux'


export default function LoginPage({ navigation }) {
	const dispatch = useDispatch()

	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	function handleSubmit () {
		console.log(username, password);

		authentication(username, password)
			.then((result) => {
				dispatch(setCurrentUser(result))

				navigation.replace('Produtos')
			})
			.catch((err) => {
				showMessage({
					message: 'Por favor, verifique seu usuário e senha.',
					type: 'danger',
					icon: 'danger'
				});
			});
	}

	return (
		<Background>
			<StatusBar
				barStyle="light-content"
				backgroundColor={colors.secundary}
			/>

			<Title>Hortifrutigranjeiro</Title>
			
			<FormWrapper>
				<Input placeholder="usuario" onChangeText={val => setUsername(val)} />

				<Input placeholder="senha" onChangeText={val => setPassword(val)}  secureTextEntry={true} />
			</FormWrapper>

			<TouchableOpacity onPress={handleSubmit}>
				<SubmitButtonText>LOGIN</SubmitButtonText>
			</TouchableOpacity>

			<TouchableOpacity>
				<GuestButtonText >ou entrar como convidado</GuestButtonText>
			</TouchableOpacity>
		</Background>
	);
}
