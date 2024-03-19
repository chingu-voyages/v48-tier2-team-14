import { createContext, useState, useEffect } from "react";
import { getFetchData } from "../global/utils.js";
import LoadingPage from "../components/LoadingPage";
import randomColor from "randomcolor";

const AppContext = createContext();
const DINO_API_URL = "https://chinguapi.onrender.com/dinosaurs";

const AppProvider = ({ children }) => {
  // State Properties, add or modify as needed
  const [responseData, setResponseData] = useState([]);
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [diet, setDiet] = useState([]);
	const [type, setType] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const storedDinoData = localStorage.getItem("dinoData");
        if (storedDinoData) {
          console.log("No API call made, data in local storage: (dinoData)") // check to see whether unnecessary calls are made
					setResponseData(JSON.parse(storedDinoData));
          setData(JSON.parse(storedDinoData));
          setLoading(false);
				} else {
					const responseData = await getFetchData(DINO_API_URL);
					console.log("API call made"); // check to see whether unnecessary calls are made
					setResponseData(responseData);
          setData(responseData);
					setTimeout(() => {
						setLoading(false);
						localStorage.setItem("dinoData", JSON.stringify(responseData));
					}, 2000); // Set loading page duration to 2 seconds
				}
			} catch (error) {
				console.error("Error fetching data:", error);
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const dinasourDiet = {};
		const dinasourDietData = [];

		const dinasourType = {};
		const dinasourTypeData = [];

		data.forEach((d) => {
			if (dinasourDiet.hasOwnProperty(d.diet)) {
				// Check if the diet property exists in dinasourDiet
				dinasourDiet[d.diet] += 1; // Increment the count based on the diet
			} else {
				dinasourDiet[d.diet] = 1;
			}
		});

		data.forEach((dinasour) => {
			// Check if the typeOfDinosaur property exists in the dinasourType object
			if (dinasourType.hasOwnProperty(dinasour.typeOfDinosaur)) {
				// Increment the count for the given typeOfDinosaur
				dinasourType[dinasour.typeOfDinosaur] += 1;
			} else {
				// Optionally, initialize the count for this new typeOfDinosaur if you want to include types not initially in dinasourType
				// Remove or comment out the next line if you only want to count existing types
				dinasourType[dinasour.typeOfDinosaur] = 1;
			}
		});

		const dietKeys = Object.keys(dinasourDiet);
		dietKeys.forEach((element) => {
			if (dinasourDiet[element] > 2) {
				let temp = {
					id: `${element}`,
					label: `${element}`,
					value: Math.floor((dinasourDiet[element] / data.length) * 100),
					color: randomColor(),
				};
				if (!dinasourDietData.includes(dinasourDietData.id)) {
					dinasourDietData.push(temp);
				}
			} else {
				let temp = {
					id: `${element}`,
					label: `${element}`,
					value: 1,
					color: randomColor(),
				};
				if (!dinasourDietData.includes(dinasourDietData.id)) {
					dinasourDietData.push(temp);
				}
			}
		});

		const typeKeys = Object.keys(dinasourType);
		typeKeys.forEach((element) => {
			let temp = {
				id: `${element}`,
				label: `${element}`,
				value: dinasourType[element],
				color: randomColor(),
			};
			if (!dinasourTypeData.includes(dinasourTypeData.id)) {
				dinasourTypeData.push(temp);
			}
		});
		setDiet(dinasourDietData);
		setType(dinasourTypeData);
	}, [data]);

	if (loading) {
		return (
			<div className="ldrs">
				<LoadingPage isLoading={loading} />
			</div>
		);
	}

	return (
		<AppContext.Provider value={{ responseData, data, diet, type }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };
