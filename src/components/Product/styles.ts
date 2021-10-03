import styled from 'styled-components/native';
import { Pressable } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(Pressable).attrs({
    activeOpacity: 0.7
})`
    width: 47%;
    margin-bottom: 30px;

    background: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
`;

export const Content = styled.View`
    padding: 10px;
`;

export const Image = styled.Image`
    width: 100%;
    height: 160px;
    border-radius: 10px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(16)}px;
    margin-bottom: 6px;
`;

export const PriceContent = styled.View`
    flex-direction: row;
`;

export const Currency = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${RFValue(12)}px;
    margin-right: 5px;
`;

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(18)}px;
`;
