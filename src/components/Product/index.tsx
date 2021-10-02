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
    product: ProductProps
}

export function Product({
    product
}: Props){
    return(
        <Container>
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