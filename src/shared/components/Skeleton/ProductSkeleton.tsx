import "./ProductSkeleton.css";

interface ProductSkeletonProps {
  count?: number;
}

function ProductSkeleton({ count = 8 }: ProductSkeletonProps) {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-image" />
          <div className="skeleton-line short" />
          <div className="skeleton-line" />
        </div>
      ))}
    </div>
  );
}

export default ProductSkeleton;
