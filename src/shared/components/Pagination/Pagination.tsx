import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="pagination-container">
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      <div className="pagination-pages">
        {Array.from({ length: totalPages }, (_, index) => {
          const page = index + 1;

          return (
            <button
              key={page}
              className={`pagination-page ${
                page === currentPage ? "active" : ""
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
}

export default Pagination;
