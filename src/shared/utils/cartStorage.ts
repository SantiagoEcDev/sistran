import type { CartItem } from "../context/cart/CartContext";

const CART_KEY = "cart";

export const saveCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const getCart = (): CartItem[] => {
  try {
    const data = localStorage.getItem(CART_KEY);
    if (!data) return [];
    return JSON.parse(data);
  } catch {
    return [];
  }
};
