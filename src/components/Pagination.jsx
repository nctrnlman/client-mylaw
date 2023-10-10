/* eslint-disable react/prop-types */
// import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const isLastPage = currentPage === totalPages;

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-2 mx-1 rounded ${
            currentPage === i
              ? "bg-primary text-white"
              : "bg-white text-primary hover:bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex flex-col items-center mt-4 mb-20">
      <span className="text-primary mb-2">
        Showing {currentPage * 5 - 4} -{" "}
        {isLastPage ? totalPages * 5 : currentPage * 5} news
      </span>
      <div className="flex space-x-2">
        {currentPage > 1 && (
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="bg-primary text-white px-3 py-2 rounded hover:bg-gray-200"
          >
            Previous
          </button>
        )}
        {renderPageNumbers()}
        {currentPage < totalPages && (
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="bg-primary text-white px-3 py-2 rounded hover:bg-gray-200"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
