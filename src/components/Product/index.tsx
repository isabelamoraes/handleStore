import React from 'react';

import {
    Container,
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
    onPressIn: () => void;
    onPressOut: (item: ProductProps) => void;
}

export function Product({
    product,
    onPressIn,
    onPressOut
}: Props){

    return(
        <Container 
            onPressIn={onPressIn}
            onPressOut={() => onPressOut(product)}
        >
            <Image 
                source={{ uri: product.image }}
            />

            <Title>{product.name}</Title>
            
            <PriceContent>
                <Currency>$</Currency>
                <Price>{product.price}</Price>
            </PriceContent>
        </Container>
    );
}