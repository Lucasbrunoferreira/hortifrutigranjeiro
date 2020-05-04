import React from 'react';
import { colors } from '~/styles/colors'
import { Wrapper, TextCode, TextDescription } from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isAdmin } from '~/helpers/userAccount'

export default function ProductItem(props) {

	return (
		<Wrapper>
			<TextCode>{ props.item.productCode }</TextCode>

			<TextDescription>{ props.item.description }</TextDescription>

			{ !isAdmin() ? <Ionicons name='ios-add-circle-outline' size={25} color={colors.secundary} /> : null }
		</Wrapper>
	);
}
