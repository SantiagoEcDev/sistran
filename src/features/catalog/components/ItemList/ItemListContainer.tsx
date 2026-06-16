import { useCallback, useMemo, useState } from "react";
import ItemList from "./ItemList";
import { useFetch } from "../../../../shared/hooks/useFetch";
import type { Product } from "../../pages/types/product";
import { getProducts } from "../../pages/services/productService";
import ProductSkeleton from "../../../../shared/components/Skeleton/ProductSkeleton";
import Pagination from "../../../../shared/components/Pagination/Pagination";
import "./ItemListContainer.css";

interface ItemListContainerProps {
  title: string;
}

const PRODUCTS_PER_PAGE = 20;

const ItemListContainer = ({ title }: ItemListContainerProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = useCallback(() => getProducts(), []);

  const { data: products, loading, error } = useFetch<Product[]>(fetchProducts);

  const totalProducts = products?.length ?? 0;

  const totalPages = Math.ceil(totalProducts / PRODUCTS_PER_PAGE);

  const paginatedProducts = useMemo(
    () =>
      products?.slice(
        (currentPage - 1) * PRODUCTS_PER_PAGE,
        currentPage * PRODUCTS_PER_PAGE,
      ) ?? [],
    [products, currentPage],
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (error) {
    return (
      <div className="catalog-page">
        <p className="error-text">{error}</p>
      </div>
    );
  }

  return (
    <div className="catalog-page">
      <div className="catalog-wrapper">
        <h2 className="catalog-title">{title}</h2>

        {loading ? (
          <ProductSkeleton count={PRODUCTS_PER_PAGE} />
        ) : totalProducts > 0 ? (
          <>
            <ItemList products={paginatedProducts} />

            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        ) : (
          <div className="empty-state">
            <p>No hay productos disponibles</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
