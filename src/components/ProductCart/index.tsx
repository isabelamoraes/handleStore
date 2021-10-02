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
}

export function ProductCart({
    product
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
                    <QuantityButton>
                        <Feather
                            name="minus"
                            size={14}
                            color={theme.colors.primary}
                        />
                    </QuantityButton>

                    <Quantity>{product.quantity}</Quantity>

                    <QuantityButton>
                        <Feather
                            name="plus"
                            size={14}
                            color={theme.colors.primary}
                        />
                    </QuantityButton>
                </QuantityContent>
            </Content>

            <Delete>
                <Feather
                    name="trash-2"
                    size={24}
                    color={theme.colors.delete}
                />
            </Delete>
        </Container>
    );
}