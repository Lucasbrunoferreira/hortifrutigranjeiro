import styled from 'styled-components/native';

import { colors } from '~/styles/colors'
import { fontSize } from '~/styles/font'
import { metrics } from '~/styles/metrics'

export const Wrapper = styled.View`
	flexDirection: row;
	alignItems: center;
	justifyContent: space-around;
	backgroundColor: ${colors.light};
	width: ${metrics.screenWidth}px;
	padding: ${metrics.baseSpacing}px;
	marginBottom: ${metrics.baseSpacing / 2}px;
`;

export const TextCode = styled.Text`
	color: ${colors.secundary};
	fontSize: ${fontSize.small};
	fontFamily: 'sans-serif';
`;

export const TextDescription = styled.Text`
	color: ${colors.secundary};
	fontSize: ${fontSize.wide};
	fontFamily: 'sans-serif-thin';
`;
