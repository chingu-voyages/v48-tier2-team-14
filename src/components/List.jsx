import React, { useState, useContext } from "react";
import Pagination from "./Pagination";
import { AppContext } from "../context/Context";
import "../styles/List.css";

function List() {
  
  const { data, setSelectedDinosaur, setMatchedItems } = useContext(AppContext);
  const noDinoImage = "N/A";
  
  const handleClickItem = (dinosaur, e) => {
    setSelectedDinosaur(dinosaur);
    setMatchedItems([dinosaur]);
  };

  return (
    <>
      <div className="headerText">
        <h6 className="display-12 text-uppercase w-50 mx-1 text-center py-1">
          dinosaur list
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
                    <p className="dinoLocation">{dinosaur.foundIn}</p>
                    <p className="dinoType">{dinosaur.typeOfDinosaur}</p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default List;
