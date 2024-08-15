const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="space-x-5 text-center py-5">
      <button onClick={handlePrevious} disabled={currentPage === 1} className="btn bg-[#768048] text-white">
        Prev
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button onClick={handleNext} disabled={currentPage === totalPages} className="btn bg-[#768048] text-white">
        Next
      </button>
    </div>
  );
};

export default Pagination;
