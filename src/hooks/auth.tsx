import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProductCartProps } from '../components/ProductCart';
import { ProductProps } from '../components/Product';

type AuthContextData = {
    cart: ProductCartProps[];
    addToCart: (cart: ProductProps) => Promise<void>;
    removeToCart: (id: number) => Promise<void>;
    updateToCart: (id: number, quantity: number) => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
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
            await AsyncStorage.setItem(dataKey, JSON.stringify(updateCart));

        } catch (error) {
            throw new Error(error);
        }
    }

    async function removeToCart(id: number) {
        try {
            if(cart.length == 1){
                setCart([]);
                AsyncStorage.removeItem(dataKey);
            }else{
                setCart(oldState => oldState.filter(
                    cart => cart.id !== id
                ));
    
                await AsyncStorage.setItem(dataKey, JSON.stringify(cart));
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
                await AsyncStorage.setItem(dataKey, JSON.stringify(updateCart));
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

    useEffect(() => {
        loadStorageData();
    }, [])

    return (
        <AuthContext.Provider value={{
            cart,
            addToCart,
            removeToCart,
            updateToCart
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export {
    AuthProvider,
    useAuth
}