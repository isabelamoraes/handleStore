import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    padding: 30px;
    padding-bottom: 0px;

    background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    margin-top: 30px;
    margin-bottom: 20px;

    flex-direction: row;
    justify-content: space-between;

    align-items: center;
`;

export const Info = styled.View``;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(24)}px;
`;

export const TitleStore = styled.Text`
    color: ${({ theme }) => theme.colors.secondary};
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(18)}px;
`;

export const Cart = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6
})``;
