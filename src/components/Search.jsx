import { useContext, useState } from "react";
import { AppContext } from "../context/Context";

function Search() {
	const { data, searchDinosaurs, searchObj, setSearchObj } = useContext(AppContext);
	const [name, setName] = useState("");
	const [minWeight, setMinWeight] = useState(0);
	const [maxWeight, setMaxWeight] = useState(70000);
	const [minLength, setMinLength] = useState(0);
	const [maxLength, setMaxLength] = useState(37.5);
	const [diet, setDiet] = useState();
	const [country, setCountry] = useState();

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

	const handleSubmit = () => {
		console.log(searchObj);
		searchDinosaurs(searchObj);
	};
	
	return (
		<div className="row">
			<input
				placeholder="Search for a dinosuar..."
				type="text"
				className="col-md-2"
				onChange={handleNameChange}
			></input>
			<input
				placeholder="Country"
				type="text"
				className="col-md-1"
				onChange={handleCountryChange}
			></input>
			<input
				placeholder="0"
				className="col-md-1"
				type="number"
				min="0"
				max="70000"
				onChange={handleMinWeightChange}
			></input>
			<input
				placeholder="70000"
				className="col-md-1"
				type="number"
				min="0"
				max="70000"
				onChange={handleMaxWeightChange}
			></input>
			<input
				placeholder="Diet"
				type="text"
				className="col-md-1"
				onChange={handleDietChange}
			></input>
			<input
				placeholder="0"
				className="col-md-1"
				type="number"
				min="0"
				max="37.5"
				onChange={handleMinLengthChange}
			></input>
			<input
				placeholder="37.5"
				className="col-md-1"
				type="number"
				min="0"
				max="37.5"
				onChange={handleMaxLengthChange}
			></input>
			<button className="col-md-1" onClick={handleSubmit}>
				Search
			</button>
		</div>
	);
}
export default Search;
