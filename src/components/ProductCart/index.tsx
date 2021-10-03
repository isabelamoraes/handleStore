import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    Content,
    Image,
    Title,
    PriceContent,
    Currency,
    Price,
    QuantityContent,
    QuantityButton,
    Quantity,
    Delete
} from './styles';

export interface ProductCartProps {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartProps {
    product: ProductCartProps;
    removeProduct: (id: number) => void;
    updateProduct: (id: number, quantity: number) => void;
}

export function ProductCart({
    product,
    removeProduct,
    updateProduct
}: CartProps) {
    const theme = useTheme();

    return (
        <Container>
            <Image
                source={{ uri: product.image }}
            />

            <Content>
                <Title>{product.name}</Title>

                <PriceContent>
                    <Currency>$</Currency>
                    <Price>{product.price}</Price>
                </PriceContent>

                <QuantityContent>
                    <QuantityButton
                        onPress={() => updateProduct(product.id, product.quantity-1)}
                    >
                        <Feather
                            name="minus"
                            size={14}
                            color={theme.colors.primary}
                        />
                    </QuantityButton>

                    <Quantity>{product.quantity}</Quantity>

                    <QuantityButton
                        onPress={() => updateProduct(product.id, product.quantity+1)}
                    >
                        <Feather
                            name="plus"
                            size={14}
                            color={theme.colors.primary}
                        />
                    </QuantityButton>
                </QuantityContent>
            </Content>

            <Delete
                onPress={() => removeProduct(product.id)}
            >
                <Feather
                    name="trash-2"
                    size={24}
                    color={theme.colors.delete}
                />
            </Delete>
        </Container>
    );
}