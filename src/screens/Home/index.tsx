import React, { useState, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';
import LottieView from 'lottie-react-native';
import { useAnimationState } from 'moti';

import api from '../../services/api';
import { useCart } from '../../hooks/cart';
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
    Image,
    Quantity
} from './styles';

export function Home({ navigation }) {
    const { cart, addToCart } = useCart();

    const [data, setData] = useState<ProductProps[]>([]);
    const [loading, setLoading] = useState(true);

    function handleCart() {
        navigation.navigate('Cart');
    }

    const quantityCart =
        cart.reduce((sumTotal, product) => {
            sumTotal += product.quantity;
            return sumTotal
        }, 0)

    const toogleAnimationState = useAnimationState({
        inImage: {
            width: 40,
            height: 40,
            marginTop: -8,
        },
        outImage: {
            width: 30,
            height: 30,
            marginTop: -8,
        },
        inText: {
            fontSize: 14,
        },
        outText: {
            fontSize: 12,
        }
    });

    function handlePressIn(product: ProductProps) {
        toogleAnimationState.transitionTo('inImage');
        addToCart(product);
    }

    function handlePressOut() {
        toogleAnimationState.transitionTo('outImage');
    }

    async function loadData() {
        try {
            const response = await api.get('product');

            setData(response.data);
        } catch {
            Alert.alert("Oops!", "Unable to load products from the store. Try again later.")
        } finally {
            setLoading(false);
        }
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
                    <Quantity
                        state={toogleAnimationState}
                    >
                        {quantityCart}
                    </Quantity>
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
                                onPress={handlePressIn}
                                onPressOut={handlePressOut}
                            />
                        }
                    />
            }

        </Container>
    );
}