import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { FlatList } from 'react-native';
import LottieView from 'lottie-react-native';
import { useAnimationState } from 'moti';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { Product, ProductProps } from '../../components/Product';

import loadAnimation from '../../assets/load.json';
import cartPNG from '../../assets/cart.png';

import {
    Container,
    Header,
    Info,
    Title,
    TitleStore,
    Subtitle,
    Cart,
    Image
} from './styles';

export function Home({ navigation }) {
    const theme = useTheme();
    const { addToCart } = useAuth();

    const [data, setData] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState(true);

    function handleCart() {
        navigation.navigate('Cart');
    }

    const toogleAnimationState = useAnimationState({
        in: {
            width: 40,
            height: 40,
        },
        out: {
            width: 30,
            height: 30,
        }
    });

    function handlePressIn() {
        toogleAnimationState.transitionTo('in');
    }

    function handlePressOut(product: ProductProps) {
        toogleAnimationState.transitionTo('out');
        addToCart(product);
    }

    async function loadData() {
        const response = await api.get('product');

        setData(response.data);
        setLoading(false);
    }

    useEffect(() => {
        loadData();
    }, [])

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
                    <Image
                        source={cartPNG}
                        state={toogleAnimationState}
                    />
                </Cart>
            </Header>

            {
                loading
                    ?
                    <LottieView
                        source={loadAnimation}
                        style={{ height: 200, alignSelf: 'center' }}
                        resizeMode="contain"
                        autoPlay
                        loop
                    />
                    :
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
                            <Product 
                                product={item} 
                                onPressIn={handlePressIn}
                                onPressOut={() => handlePressOut(item)}
                            />
                        }
                    />
            }

        </Container>
    );
}