import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { TCartData } from '../../types/cartData.types';

const CartContext = createContext<{
    cartData: TCartData[];
    addCourseToCart: (course: TCartData) => void;
    removeCourseFromCart: (courseId: string) => void;
} | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartData, setCartData] = useState<TCartData[]>([]);

    const loadCartData = () => {
        const existingCartData = localStorage.getItem("cart");
        setCartData(existingCartData ? JSON.parse(existingCartData) : []);
    };

    const addCourseToCart = (course: TCartData) => {
        const updatedCart = [...cartData, course];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartData(updatedCart);
    };

    const removeCourseFromCart = (courseId: string) => {
        const updatedCart = cartData.filter(item => item._id !== courseId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        setCartData(updatedCart);
    };

    useEffect(() => {
        loadCartData();
        const handleStorageChange = () => loadCartData();
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return (
        <CartContext.Provider value={{ cartData, addCourseToCart, removeCourseFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
