import { useEffect, useState, useMemo, type ReactNode } from "react";
import { CartContext } from "./CartContext";
import type { Product } from "../../../features/catalog/pages/types/product";
import type { CartItem } from "./CartContext";
import { getCart, saveCart } from "../../utils/cartStorage";

interface Props {
  children: ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>(() => getCart());

  const addItem = (product: Product, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: Math.min(item.quantity + quantity, product.stock),
              }
            : item,
        );
      }

      return [...prev, { product, quantity }];
    });
  };

  const removeItem = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => setCart([]);

  const totalItems = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart],
  );

  const totalPrice = useMemo(
    () =>
      cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      cart,
      addItem,
      removeItem,
      clearCart,
      totalItems,
      totalPrice,
    }),
    [cart, totalItems, totalPrice],
  );

  useEffect(() => {
    saveCart(cart);
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
