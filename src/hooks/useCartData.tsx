import { useEffect, useState } from 'react';
import { TCartData } from '../types/cartData.types';

const useCart = () => {
  const [cartData, setCartData] = useState<TCartData[]>([]);

  // Load cart data from localStorage
  const loadCartData = () => {
    const existingCartData = localStorage.getItem("cart");
    setCartData(existingCartData ? JSON.parse(existingCartData) : []);
  };

  // Add course to cart
  const addCourseToCart = (course: TCartData) => {
    const updatedCart = [...cartData, course];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartData(updatedCart);
  };

  // Remove course from cart
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

  return { cartData, addCourseToCart, removeCourseFromCart };
};

export default useCart;
