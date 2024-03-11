import { createContext, useState, useEffect } from "react";
import { getFetchData } from '../global/utils.js'
import LoadingPage from '../components/LoadingPage'

const AppContext = createContext();
const DINO_API_URL = "https://chinguapi.onrender.com/dinosaurs";

const AppProvider = ({ children }) => {
	// State Properties, add or modify as needed
	const [data, setData] = useState(0);
	const [loading, setLoading] = useState(true);

useEffect(() => {
	const fetchData = async () => {
		try {
			const responseData = await getFetchData(DINO_API_URL);
			setData(responseData);
			setTimeout(() => {
				setLoading(false);
			}, 2000); // Set loading page duration to 2 seconds
		} catch (error) {
			console.error("Error fetching data:", error);
			setLoading(false); 
		}
	};

	fetchData();
}, []);

	if (loading) {
		return (
			<div className="ldrs">

				<LoadingPage isLoading={loading} />
			</div>
		)
	}

	return (
		<AppContext.Provider value={{ data }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };

