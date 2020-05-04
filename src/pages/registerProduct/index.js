import React, { useState } from 'react';
import { TouchableOpacity, Text, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { colors } from '~/styles/colors';
import { useDispatch } from 'react-redux';
import { Title, Background, Input, FormWrapper, SubmitButtonText } from './style';
import { registerProduct } from '~/store/ducks/products';
import { showMessage, } from 'react-native-flash-message';


export default function RegisterProductPage({ navigation }) {
	const dispatch = useDispatch()

	const [productCode, setProductCode] = useState()
	const [description, setDescription] = useState('')

	function handleSubmit() {
		if (productCode && description) {
			dispatch(registerProduct({ productCode, description}))

			clearForm()

			showMessage({
				message: 'Sucesso ao cadastrar o produto!',
				type: 'success',
				icon: 'success'
			});
			
			navigation.navigate('Produtos')
		} else {

			showMessage({
				message: 'Por favor, preencha todos os campos.',
				type: 'warning',
				icon: 'warning'
			});
		}
	}


	function clearForm() {
		setProductCode(null)
		setDescription('')
	}

	return (
		<Background>
			<StatusBar
				barStyle="light-content"
				backgroundColor={colors.secundary}
			/>

			<Title>Cadastrar novo produto</Title>

			<FormWrapper>
				<Input placeholder="codigo do produto" keyboardType="numeric" value={productCode} onChangeText={val => setProductCode(val)} />

				<Input placeholder="descrição do produto" value={description} onChangeText={val => setDescription(val)} />
			</FormWrapper>

			<TouchableOpacity onPress={handleSubmit}>
				<SubmitButtonText>confirmar</SubmitButtonText>
			</TouchableOpacity>
		</Background>
	);
}

