import React from "react";

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
	const pageNumbers = [];
	const totalPages = Math.ceil(totalItems / itemsPerPage);

	// Define how many page numbers to display before and after the current page
	const displayPages = 5; // Adjust this value as needed

	// Calculate the range of pages to display
	let startPage = Math.max(1, currentPage - Math.floor(displayPages / 2));
	let endPage = Math.min(totalPages, startPage + displayPages - 1);

	// Adjust startPage and endPage if they fall out of range
	if (totalPages - endPage < Math.floor(displayPages / 2)) {
		startPage = Math.max(1, endPage - displayPages + 1);
	}

	// Generate page numbers to display
	for (let i = startPage; i <= endPage; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination">
				{startPage > 1 && (
					<li>
						<button onClick={() => paginate(1)}>1</button>
					</li>
				)}
				{startPage > 2 && (
					<li>
						<span>...</span>
					</li>
				)}
				{pageNumbers.map((number) => (
					<li key={number} className={currentPage === number ? "active" : ""}>
						<button onClick={() => paginate(number)}>{number}</button>
					</li>
				))}
				{endPage < totalPages - 1 && (
					<li>
						<span>...</span>
					</li>
				)}
				{endPage < totalPages && (
					<li>
						<button onClick={() => paginate(totalPages)}>{totalPages}</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Pagination;
