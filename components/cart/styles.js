import styled from "styled-components";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

export const TotalPrice = styled.Text`
color: ${(props)=> props.theme.pink};
font-size: 15px;
font-weight: bold;
margin-left: 10px;
`;

export const CartButtonStyled = styled(Entypo)`
padding-left: -50px;
`;

export const TrashIcon = styled(FontAwesome)`
  color: ${(props) => props.theme.red};
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.pink};
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;