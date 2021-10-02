import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
`;

export const Content = styled.View``;

export const Image = styled.Image`
    width: 140px;
    height: 80px;

    border-radius: 10px;
`;

export const Title = styled(Text).attrs({
    numberOfLines: 1,
    lineBreakMode: 'clip'
})`
    width: 120px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
`;

export const PriceContent = styled.View`
    flex-direction: row;
`;

export const Currency = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(12)}px;
    margin-right: 13px;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;
`;

export const QuantityContent = styled.View`
    flex-direction: row;
    align-items: center;

    margin-top: 15px;
`;

export const QuantityButton = styled(TouchableOpacity).attrs({
    activeOpacity: 0.5
})`
    width: 24px;
    height: 24px;
    background: ${({ theme }) => theme.colors.background};

    border-radius: 12px;

    align-items: center;
    justify-content: center;
`;

export const Quantity = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(14)}px;

    margin-left: 18px;
    margin-right: 18px;
`;

export const Delete = styled(TouchableOpacity).attrs({
    activeOpacity: 0.6
})``;
