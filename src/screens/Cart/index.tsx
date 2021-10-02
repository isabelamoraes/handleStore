import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { FlatList, View } from 'react-native';

import { useAuth } from '../../hooks/auth';
import { ProductCart } from '../../components/ProductCart';

import {
    Container,
    Header,
    BackButton,
    Info,
    Title,
    Subtitle,
    Content,
    Footer,
    Wrapper,
    Description,
    PriceCotent,
    Currency,
    Price,
    Line,
    CurrencyTotal,
    PriceTotal,
    ListDivider
} from './styles';

export function Cart({ navigation }) {
    const theme = useTheme();
    const { cart, removeToCart } = useAuth();

    function handleRemoveProduct(id: number){
        removeToCart(id);
    }

    const quantityCart =
        cart.reduce((sumTotal, product) => {
            sumTotal += product.quantity;
            return sumTotal
        }, 0);

    const subTotal =
        cart.reduce((sumTotal, product) => {
            sumTotal += product.quantity * product.price;
            return sumTotal
        }, 0);

    return (
        <Container>
            <Header>
                <BackButton
                    onPress={() => navigation.goBack()}
                >
                    <Feather
                        name="arrow-left"
                        size={30}
                        color={theme.colors.primary}
                    />
                </BackButton>

                <Info>
                    <Title>
                        My Cart
                    </Title>

                    <Subtitle>
                        {quantityCart} items
                    </Subtitle>
                </Info>

                <View style={{ width: 30 }} />
            </Header>

            <Content>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={cart}
                    keyExtractor={item => item.id.toString()}
                    contentContainerStyle={{ paddingHorizontal: 30, paddingBottom: 30 }}
                    ItemSeparatorComponent={() => <ListDivider />}
                    renderItem={({ item }) =>
                        <ProductCart 
                            product={item} 
                            removeProduct={() => handleRemoveProduct(item.id)}
                        />
                    }
                />
            </Content>

            <Footer>
                <Wrapper>
                    <Description>Sub total: </Description>

                    <PriceCotent>
                        <Currency>$</Currency>
                        <Price>{subTotal.toFixed(2)}</Price>
                    </PriceCotent>
                </Wrapper>

                <Wrapper>
                    <Description>Shipping: </Description>

                    <PriceCotent>
                        <Currency>$</Currency>
                        <Price>7.00</Price>
                    </PriceCotent>
                </Wrapper>

                <Line />

                <Wrapper>
                    <Description>Total: </Description>

                    <PriceCotent>
                        <CurrencyTotal>$</CurrencyTotal>
                        <PriceTotal>{(subTotal + 7).toFixed(2)}</PriceTotal>
                    </PriceCotent>
                </Wrapper>
            </Footer>
        </Container>
    );
}