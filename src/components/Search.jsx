import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/Context";

function Search() {
	const {
		data,
		setData,
		searchDinosaurs,
		searchObj,
		setSearchObj,
		responseData,
	} = useContext(AppContext);
	const [name, setName] = useState("");
	const [minWeight, setMinWeight] = useState(0);
	const [maxWeight, setMaxWeight] = useState(70000);
	const [minLength, setMinLength] = useState(0);
	const [maxLength, setMaxLength] = useState(37.5);
	const [diet, setDiet] = useState("");
	const [country, setCountry] = useState("");
	const [namePlaceholder, setNamePlaceholder] = useState("Search for a dinosaur...");
	const [dietPlaceholder, setDietPlaceholder] = useState("Diet");
	const [countryPlaceholder, setCountryPlaceholder] = useState("Country");

	const handleNameChange = (event) => {
		const newName = event.target.value;
		setName(newName);
		setSearchObj((prevState) => ({
			...prevState,
			name: newName,
		}));
	};

	const handleMinWeightChange = (event) => {
		const newMinWeight = event.target.value;
		setMinWeight(newMinWeight);
		setSearchObj((prevState) => ({
			...prevState,
			minWeight: newMinWeight,
		}));
	};

	const handleMaxWeightChange = (event) => {
		const newMaxWeight = event.target.value;
		setMaxWeight(newMaxWeight);
		setSearchObj((prevState) => ({
			...prevState,
			maxWeight: newMaxWeight,
		}));
	};

	const handleMinLengthChange = (event) => {
		const newMinLength = event.target.value;
		setMinLength(newMinLength);
		setSearchObj((prevState) => ({
			...prevState,
			minLength: newMinLength,
		}));
	};

	const handleMaxLengthChange = (event) => {
		const newMaxLength = event.target.value;
		setMaxLength(newMaxLength);
		setSearchObj((prevState) => ({
			...prevState,
			maxLength: newMaxLength,
		}));
	};

	const handleCountryChange = (event) => {
		const newCountry = event.target.value;
		setCountry(newCountry);
		setSearchObj((prevState) => ({
			...prevState,
			country: newCountry,
		}));
	};

	const handleDietChange = (event) => {
		const newDiet = event.target.value;
		setDiet(newDiet);
		setSearchObj((prevState) => ({
			...prevState,
			diet: newDiet,
		}));
	};

	const handleNameFocus = () => {
		setName("");
		setNamePlaceholder("");
	};
	const handleDietFocus = () => {
		setDiet("");
		setDietPlaceholder("");
	};
	const handleCountryFocus = () => {
		setCountry("");
		setCountryPlaceholder("");
	};

	const handleSubmit = () => {
		console.log(searchObj);
		searchDinosaurs(searchObj);
	};

	const clearSearch = () => {
		setName("Search for a dinosuar...");
		setMinWeight(0);
		setMaxWeight(70000);
		setMinLength(0);
		setMaxLength(37.5);
		setDiet("Diet Type");
		setCountry("Country");
		setData(responseData);

		setSearchObj({
			name: "",
			minWeight: 0,
			maxWeight: 70000,
			minLength: 0,
			maxLength: 37.5,
			diet: "",
			country: "",
		});
	};
	useEffect(() => {
	const handleKeyDown = (event) => {
		if (event.key === "Escape") {
			clearSearch();
		}
	};
	document.addEventListener("keydown", handleKeyDown);
	return () => {
		document.removeEventListener("keydown", handleKeyDown);
	};
}, []);

	return (
		<div className="row d-inline-flex justify-content-between" id="searchBar">
			<input
				placeholder="Search for a dinosuar..."
				type="text"
				className="col-md-2 rounded-1 border-0 py-2"
				value={name}
				onChange={handleNameChange}
				onFocus={handleNameFocus}
			></input>
			<input
				placeholder="Country"
				type="text"
				className="col-md-1 rounded-1 border-0 py-2"
				value={country}
				onFocus={handleCountryFocus}
				onChange={handleCountryChange}
			></input>
			<input
				placeholder="0"
				className="col-md-1 rounded-1 border-0 py-2"
				type="number"
				min="0"
				max="70000"
				value={minWeight}
				onChange={handleMinWeightChange}
			></input>
			<input
				//placeholder="70000"
				className="col-md-1 rounded-1 border-0 py-2"
				type="number"
				min="0"
				max="70000"
				value={maxWeight}
				onChange={handleMaxWeightChange}
			></input>
			<input
				placeholder="Diet"
				type="text"
				className="col-md-1 rounded-1 border-0 py-2"
				value={diet}
				onFocus={handleDietFocus}
				onChange={handleDietChange}
			></input>
			<input
				placeholder="0"
				className="col-md-1 rounded-1 border-0 py-2"
				type="number"
				min="0"
				max="37.5"
				value={minLength}
				onChange={handleMinLengthChange}
			></input>
			<input
				placeholder="37.5"
				className="col-md-1 rounded-1 border-0 py-2"
				type="number"
				min="0"
				max="37.5"
				value={maxLength}
				onChange={handleMaxLengthChange}
			></input>
			<button className="col-md-1 rounded-1 border-0 py-2" id="searchBtn" onClick={handleSubmit}>
				Search
			</button>
			<button className="col-md-1 rounded-1 border-0 bg-white py-2" onClick={clearSearch}>
				Clear
			</button>
		</div>
	);
}
export default Search;
