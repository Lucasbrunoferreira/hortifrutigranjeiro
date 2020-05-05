import React from 'react';
import { Wrapper, TextCode, TextDescription } from './style'

export default function CartItem(props) {

	return (
		<Wrapper>
			<TextCode>{ props.item.productCode }</TextCode>

			<TextDescription>{ props.item.description }</TextDescription>
		</Wrapper>
	);
}
