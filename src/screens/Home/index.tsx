import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { FlatList } from 'react-native';

import api from '../../services/api';

import { Product, ProductProps } from '../../components/Product';

import {
    Container,
    Header,
    Info,
    Title,
    TitleStore,
    Subtitle,
    Cart
} from './styles';

export function Home({navigation}) {
    const theme = useTheme();
    const [data, setData] = useState<ProductProps[]>([]);

    function handleCart(){
        navigation.navigate('Cart')
    }

    async function loadData() {
        const response = await api.get('product');

        setData(response.data);
    }

    useEffect(() => {
        loadData();
    },[])

    return (
        <Container>
            <Header>
                <Info>
                    <Title>Handle<TitleStore>Store</TitleStore></Title>
                    <Subtitle>Press product to add to cart</Subtitle>
                </Info>
                <Cart
                    onPress={handleCart}
                >
                    <Feather
                        name="shopping-cart"
                        size={30}
                        color={theme.colors.secondary}
                    />
                </Cart>
            </Header>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                contentContainerStyle={{ paddingVertical: 20 }}
                columnWrapperStyle={{
                    flex: 1,
                    justifyContent: 'space-between',
                }}
                renderItem={({ item }) =>
                    <Product product={item}/>
                }
            >

            </FlatList>

        </Container>
    );
}