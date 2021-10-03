import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from '../../hooks/auth';

describe('Auth Hook', () => {
    it('should be able to add a product to cart', async () => {
        const product = {
            id: 1,
            name: "Rustic Metal Fish",
            price: 289.00,
            image: "http://lorempixel.com/640/480/food",
            quantity: 1
        }

        const cart = [product];

        const { result } = renderHook(() => useAuth(), {
            wrapper: AuthProvider
        });

        await act(() => result.current.addToCart(product));

        expect(result.current.cart).toEqual(cart);
    });

    it('should be able to remove a product to cart', async () => {
        const productId = 1;

        const updatedCart = [];

        const { result } = renderHook(() => useAuth(), {
            wrapper: AuthProvider
        });

        await act(() => result.current.removeToCart(productId));

        expect(result.current.cart).toEqual(updatedCart);
    });

    it('should be able to update a product quantity to cart', async () => {
        const productId = 1;
        const productQuantity = 2;

        const product = {
            id: 1,
            name: "Rustic Metal Fish",
            price: 289.00,
            image: "http://lorempixel.com/640/480/food",
            quantity: 1
        };

        const { result } = renderHook(() => useAuth(), {
            wrapper: AuthProvider
        });

        await act(() => result.current.addToCart(product));

        await act(() => result.current.updateToCart(productId, productQuantity));

        expect(result.current.cart[0].quantity).toEqual(2);
    });
});