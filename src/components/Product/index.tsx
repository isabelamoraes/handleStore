import React from 'react';

import {
    Container,
    Content,
    Image,
    Title,
    PriceContent,
    Currency,
    Price
} from './styles';

export interface ProductProps {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface Props {
    product: ProductProps;
    onPress: (item: ProductProps) => void;
    onPressOut: () => void;
}

export function Product({
    product,
    onPress,
    onPressOut
}: Props) {

    return (
        <Container
            onPress={() => onPress(product)}
            onPressOut={onPressOut}
        >

            <Image
                source={{ uri: product.image }}
            />

            <Content>
                <Title>{product.name}</Title>

                <PriceContent>
                    <Currency>$</Currency>
                    <Price>{product.price}</Price>
                </PriceContent>
            </Content>
        </Container>
    );
}