import styled from 'styled-components/native';

import { colors } from '~/styles/colors'
import { fontSize } from '~/styles/font'
import { metrics } from '~/styles/metrics'

export const Background = styled.View`
  flex: 1;
  backgroundColor: ${colors.white};
  justifyContent: center;
  alignItems: center;
`;

export const Title = styled.Text`
	color: ${colors.secundary};
	fontSize: ${fontSize.wide};
	fontFamily: 'sans-serif-thin';
`;

export const FormWrapper = styled.View`
	margin: ${metrics.doubleBaseSpacing}px;
`;

export const Input = styled.TextInput`
	borderWidth: 1;
	borderColor: ${colors.secundary};
	width: 220;
	margin: ${metrics.smallSpacing}px;
	padding: ${metrics.smallSpacing}px;
`;

export const SubmitButtonText = styled.Text`
	color: ${colors.secundary};
	fontFamily: 'sans-serif-medium';
	fontSize: ${fontSize.small}px;
`;

export const GuestButtonText = styled.Text`
	color: ${colors.silver};
	fontFamily: 'sans-serif';
	fontSize: ${fontSize.small}px;
	marginTop: ${metrics.baseSpacing};
`;
