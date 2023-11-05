import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="flex justify-center space-x-2 mt-4">
      {pageNumbers.map((number) => (
        <li key={number}>
          <button
            onClick={() => onPageChange(number)}
            className={`px-3 py-2 rounded-full focus:outline-none ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-gray-100'}`}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
