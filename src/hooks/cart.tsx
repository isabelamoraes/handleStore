import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect,
    useCallback
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProductCartProps } from '../components/ProductCart';
import { ProductProps } from '../components/Product';

type CartContextData = {
    cart: ProductCartProps[];
    addToCart: (cart: ProductProps) => Promise<void>;
    removeToCart: (id: number) => Promise<void>;
    updateToCart: (id: number, quantity: number) => Promise<void>;
}

type CartProviderProps = {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<ProductCartProps[]>([]);

    const dataKey = `@handleStore:cart`;

    async function addToCart(newProduct: ProductProps) {
        try {
            const updateCart = [...cart];

            const productExist = updateCart.find(product => product.id === newProduct.id);

            const currentQuantity = productExist ? productExist.quantity : 0;
            const quantity = currentQuantity + 1;

            if (productExist) {
                productExist.quantity = quantity;
            } else {

                const product = {
                    id: newProduct.id,
                    name: newProduct.name,
                    image: newProduct.image,
                    price: newProduct.price,
                    quantity: 1
                }

                updateCart.push(product);
            }

            setCart(updateCart);

        } catch (error) {
            throw new Error(error);
        }
    }

    async function removeToCart(id: number) {
        try {
            if (cart.length == 1) {
                setCart([]);
                AsyncStorage.removeItem(dataKey);
            } else {
                setCart(oldState => oldState.filter(
                    cart => cart.id !== id
                ));
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async function updateToCart(id: number, quantity: number) {
        try {
            const updateCart = [...cart];

            const productExist = updateCart.find(product => product.id === id);

            if (productExist) {
                productExist.quantity = quantity;

                setCart(updateCart);
            } else {
                throw Error();
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    async function loadStorageData() {
        try {
            const dataStoraged = await AsyncStorage.getItem(dataKey);

            if (dataStoraged) {
                const cartStorage = JSON.parse(dataStoraged) as ProductCartProps[];
                setCart(cartStorage);
            }
        } catch (error) {
            throw new Error(error);
        }
    }

    async function updateStorageData() {
        await AsyncStorage.setItem(dataKey, JSON.stringify(cart));
    }

    useEffect(() => {
        loadStorageData();
    }, []);

    useEffect(useCallback(() => {
        updateStorageData();
    }, [cart]));

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeToCart,
            updateToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

function useCart() {
    const context = useContext(CartContext);

    return context;
}

export {
    CartProvider,
    useCart
}