import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.backgroundList};
`;

export const Header = styled.View`
    padding: 30px;
    margin-top: 30px;
    margin-bottom: 20px;

    flex-direction: row;
    justify-content: space-between;

    align-items: center;
`;

export const BackButton = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6
})``;

export const Info = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(24)}px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(18)}px;

    margin-top: 6px;
`;

export const Content = styled.View`
    height: ${Dimensions.get('window').height - 370}px;
`;

export const Footer = styled.View`
    height: 210px;
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    padding: 30px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    position: absolute;
    bottom: 0px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
`;

export const PriceCotent = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Currency = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(12)}px;
    margin-right: 5px;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(18)}px;
`;

export const Line = styled.View`
    width: 100%;
    height: 1px;

    background: ${({ theme }) => theme.colors.stroke};
    margin-bottom: 20px;
`;

export const CurrencyTotal = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(16)}px;
    margin-right: 5px;
`;

export const PriceTotal = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(30)}px;
`;

export const ListDivider = styled.View`
    width: 100%;
    height: 1px;

    background: ${({ theme }) => theme.colors.stroke};
    
    margin-top: 20px;
    margin-bottom: 20px;
`;