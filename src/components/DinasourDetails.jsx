import React, { useState, useContext } from "react";
import "../styles/DinasourDetails.css";
import dinasour from "../../assets/dinasour.jpg";
import { AppContext } from "../context/Context";

const DinasourDetails = () => {
  const { selectedDinosaur } = useContext(AppContext);
  const noDinoImage = "N/A";

  let tempDescription =
    "In the Late Triassic Period dinosaurs were not at the top of the food chain. Instead, early large reptiles called phytosaurs and rauisuchids domintated. Early meat-eating dinosaurs like Coelophysis relied on their speed and agility to catch a variety of animals like insects and small reptiles. The sharp teeth and grasping claws of Coelophysis would have helped them to hold and kill their food. A fossil find of an adult skeleton with what appeared to be young Coelophysis bones inside its rib cage led scientists to speculate that Coelophysis ate each other when the opportunity arose. Recent analysis has disproved this, however, by showing that the bones inside the ribcage are not a baby Coelophysis after all, but belong to a small crocodile. Coelophysis means 'hollow form' and this comes from the hollow limb bones. This feature was shared by many other dinosaurs, and would have given Coelophysis a lightly-built body, helping it to be a swift, agile hunter.";
  let tempTaxonomy =
    "Dinosauria, Saurischia, Theropoda, Tyrannosauroidea, Tyrannosauridae, Albertosaurinae";
  let tempTempWhenLived = "Early Jurassic, 199-189 million years ago";
  const [picture, setPicture] = useState(dinasour);
  // info bar details
  const [type, setType] = useState("Large theropod");
  const [weight, setWeight] = useState("1500");
  const [length, setLength] = useState("9");
  const [found, setFound] = useState("Canada");
  const [species, setSpecies] = useState("Libratus");
  const [diet, setDiet] = useState("Carnivorous");
  const [namedBy, setNamedBy] = useState("Lamb (1914)");
  //dinasour details info
  const [name, setName] = useState("Albertosaurus");
  const [description, setDesciption] = useState(tempDescription);
  const [taxonomy, setTaxonomy] = useState(tempTaxonomy);
  const [whenLived, setWhenLived] = useState(tempTempWhenLived);

  if (!selectedDinosaur) {
		return null;
	}

  return (
		<>
			<div className="full-container">
				<aside className="inner-left-container">
					<div className="inner-left-container-img">
						{selectedDinosaur.imageSrc === noDinoImage ? (
							<img
								className="dinasour-img"
								src="/dinosaur-placeholder.png"
								alt={selectedDinosaur.name}
							/>
						) : (
							<img
								className="dinasour-img"
								src={selectedDinosaur.imageSrc}
								alt={selectedDinosaur.name}
							/>
						)}
					</div>
					<div className="inner-left-container-details">
						<p>
							<span>Type:</span> {selectedDinosaur.typeOfDinosaur}
						</p>
						<p>
							<span>weight:</span> {selectedDinosaur.weight}
						</p>
						<p>
							<span>Length:</span> {selectedDinosaur.length}
						</p>
						<p>
							<span>FoundIn:</span> {selectedDinosaur.foundIn}
						</p>
						<p>
							<span>Species:</span> {selectedDinosaur.typeSpecies}
						</p>
						<p>
							<span>Diet:</span> {selectedDinosaur.diet}
						</p>
						<p>
							<span>Named By:</span> {selectedDinosaur.namedBy}
						</p>
					</div>
					<button className="save-btn">Save</button>
				</aside>
				<aside className="inner-right-container">
					<h3 className="section-label text-uppercase py-1">
						dinasour details
					</h3>
					<h3 style={{ marginBottom: "2rem" }}>{name}</h3>
					<h4>Description</h4>
					<p>{selectedDinosaur.description}</p>
					<hr />
					<h4>Taxonomy</h4>
					<p>{selectedDinosaur.taxonomy}</p>
					<h4>When Lived</h4>
					<p>{selectedDinosaur.whenLived}</p>
					<div id="detailsBorderTop"></div>
				</aside>
			</div>
		</>
	);
};

export default DinasourDetails;
