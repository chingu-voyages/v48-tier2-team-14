import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	// State Properties, add or modify as needed
	const [state, setState] = useState();

	// Functions to update state

	return (
		<AppContext.Provider value={{ state }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppContext, AppProvider };

