import React, { useState, useContext } from "react";
import Pagination from "./Pagination";
import { AppContext } from "../context/Context";
import "../styles/List.css";
import Dino from '../../public/dinosaur-placeholder.png'

// const ITEMS_PER_PAGE = 12;

function List() {
	const { data, setSelectedDinosaur } = useContext(AppContext);
	
  const noDinoImage = "N/A";
  
  // const [currentPage, setCurrentPage] = useState(1);
	// const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
	// const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
	// const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
	// const paginate = (pageNumber) => setCurrentPage(pageNumber);

	const handleClickItem = (dinosaur, e) => {
		setSelectedDinosaur(dinosaur);
		console.log(dinosaur)
	}

	return (
		<>
			<div className="headerText">
				<h6 className="display-12 text-uppercase w-50 mx-1 text-center py-1">
					dinosaur lists
				</h6>
			</div>
			<div className="dinoItemList mt-4">
				<ul>
					{data.map((dinosaur) => (
						<li key={dinosaur.id}>
							<button
								className="dinoItem"
								onClick={(e) => handleClickItem(dinosaur, e)}
							>
								<div className="imageContainer">
									{dinosaur.imageSrc === noDinoImage ? (
													<img
														className="listImg"
														src="/dinosaur-placeholder.png"
														alt={dinosaur.name}
													/>
												) : (
													<img
														className="listImg"
														src={dinosaur.imageSrc}
														alt={dinosaur.name}
													/>
												)}
								</div>
								<div className="detailsContainer">
									<h6 className="dinoName">{dinosaur.name}</h6>
									<div className="typeLocationContainer">
										<p className="dinoType">{dinosaur.typeOfDinosaur}</p>
										<p className="dinoLocation">{dinosaur.foundIn}</p>
									</div>
								</div>
							</button>
						</li>
					))}
				</ul>
					{/* <Pagination
						itemsPerPage={ITEMS_PER_PAGE}
						totalItems={data.length}
						paginate={paginate}
						currentPage={currentPage}
					/> */}
			</div>
		</>
	);
}
export default List;
