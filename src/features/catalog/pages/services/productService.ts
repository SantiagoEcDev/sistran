import { apiFetch } from "../../../../shared/api/client";
import type { Product } from "../types/product";

export const getProducts = (): Promise<Product[]> => {
  return apiFetch<Product[]>();
};

export const getProductById = async (id: string): Promise<Product> => {
  const products = await apiFetch<Product[]>();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};
