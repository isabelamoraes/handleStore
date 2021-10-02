import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    useEffect
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface Cart {
    product_id: number;
    quantity: number;
}

type AuthContextData = {
    cart: Cart[];
    addToCart: (cart: Cart) => Promise<void>;
    removeToCart: (id: number) => Promise<void>;
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [cart, setCart] = useState<Cart[]>([]);

    const dataKey = `@handleStore:cart`;

    async function addToCart(productCart) {
        try {
            const newCart = [...cart, productCart];

            setCart(newCart);
            await AsyncStorage.setItem(dataKey, JSON.stringify(newCart));

        } catch (error) {
            throw new Error(error);
        }
    }

    async function removeToCart(id: number) {
        try {
            setCart(oldState => oldState.filter(
                cart => cart.product_id !== id
            ));

            await AsyncStorage.setItem(dataKey, JSON.stringify(cart));

        } catch (error) {
            throw new Error(error);
        }
    }

    async function loadStorageData() {
        const dataStoraged = await AsyncStorage.getItem(dataKey);

        if (dataStoraged) {
            const cartStorage = JSON.parse(dataStoraged) as Cart[];
            setCart(cartStorage);
        }
    }

    useEffect(() => {
        loadStorageData();
    }, [])

    return (
        <AuthContext.Provider value={{
            cart,
            addToCart,
            removeToCart
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