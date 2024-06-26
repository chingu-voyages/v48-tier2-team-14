import { createContext, useState, useEffect } from "react";
import {
  getFetchData,
  getDinoNews,
  getLocationCoordinates,
} from "../global/utils.js";
import LoadingPage from "../components/LoadingPage";
import randomColor from "randomcolor";
import { randomiseGeoCoords } from "../global/utils.js";

const AppContext = createContext();
const DINO_API_URL = "https://chinguapi.onrender.com/dinosaurs";

const AppProvider = ({ children }) => {
  // State Properties, add or modify as needed
  const [responseData, setResponseData] = useState([]); //NEVER USE 'setResponseData'
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [diet, setDiet] = useState([]);
  const [country, setCountry] = useState();
  const [type, setType] = useState([]);
  const [dinoNews, setDinoNews] = useState();
  const [matchedItems, setMatchedItems] = useState([]);
  const [locationCoordinates, setLocationCoordinates] = useState([]);
  const [selectedDinosaur, setSelectedDinosaur] = useState(null);

  //------------------------------------- API CALLS --------------------------------------

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedDinoData = localStorage.getItem("dinoData");
        if (storedDinoData) {
          setResponseData(JSON.parse(storedDinoData));
          setData(JSON.parse(storedDinoData));
          setLoading(false);
        } else {
          const responseData = await getFetchData(DINO_API_URL);
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

  //------------------------------------- NEWS CALL --------------------------------------

  useEffect(() => {
    const fetchDinoNewsData = async () => {
      try {
        const storedDinoNews = localStorage.getItem("dinoNews");
        if (storedDinoNews) {
          setDinoNews(JSON.parse(storedDinoNews));
        } else {
          const newsData = await getDinoNews();
          setDinoNews(newsData.articles);
          localStorage.setItem("dinoNews", JSON.stringify(newsData.articles));
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchDinoNewsData();
  }, []);

  //------------------------------------- GET LOCATION COORDINATES --------------------------------------

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        if (matchedItems && matchedItems.length > 0) {
          const coordinatesPromises = matchedItems.map(async (dinosaur) => {
            const locations = dinosaur.foundIn
              .split(",")
              .map((location) => location.trim());
            const coordinates = await Promise.all(
              locations.map(getLocationCoordinates)
            );

            const jitteredCoordinates = coordinates.map((coord) => ({
              lat: coord.lat + randomiseGeoCoords(-3.5, 3.5),
              lng: coord.lng + randomiseGeoCoords(-3.5, 3.5),
            }));

            return { dinosaur, coordinates: jitteredCoordinates };
          });

          const dinosaursWithCoordinates = await Promise.all(
            coordinatesPromises
          );
          setLocationCoordinates(dinosaursWithCoordinates);
        } else {
          setLocationCoordinates([]);
        }
      } catch (error) {
        console.error("Unable to get Coordinates", error);
      }
    };

    getCoordinates();
  }, [matchedItems]);

  //------------------------------------- DINO CHARTS --------------------------------------

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

  //------------------------------------- SEARCH --------------------------------------

  const defaultSearchObj = {
    name: "",
    minWeight: 0,
    maxWeight: 70000,
    minLength: 0,
    maxLength: 37.5,
    country: "",
    diet: "",
  };

  const [searchObj, setSearchObj] = useState(defaultSearchObj);

  const searchDinosaurs = (searchQuery) => {
    let matchedItems = responseData;

    if (searchQuery.name.trim() !== "") {
      matchedItems = matchedItems.filter((dinosaur) =>
        dinosaur.name.toLowerCase().includes(searchQuery.name.toLowerCase())
      );
    }

    if (searchQuery.country.trim() !== "") {
      matchedItems = matchedItems.filter((dinosaur) =>
        dinosaur.foundIn
          .toLowerCase()
          .includes(searchQuery.country.toLowerCase())
      );
    }

    if (searchQuery.diet.trim() !== "") {
      matchedItems = matchedItems.filter(
        (dinosaur) =>
          dinosaur.weight === "unknown" ||
          dinosaur.diet.toLowerCase().includes(searchQuery.diet.toLowerCase())
      );
    }

    matchedItems = matchedItems.filter(
      (dinosaur) =>
        dinosaur.weight === "N/A" ||
        (parseFloat(dinosaur.weight) >= searchQuery.minWeight &&
          parseFloat(dinosaur.weight) <= searchQuery.maxWeight)
    );

    matchedItems = matchedItems.filter(
      (dinosaur) =>
        dinosaur.length === "N/A" ||
        (dinosaur.length >= searchQuery.minLength &&
          dinosaur.length <= searchQuery.maxLength)
    );

    setData(matchedItems);
    setMatchedItems(matchedItems);
  };

  //------------------------------------- LDRS --------------------------------------

  if (loading) {
    return (
      <div className="ldrs">
        <LoadingPage isLoading={loading} />
      </div>
    );
  }

  return (
    <AppContext.Provider
      value={{
        responseData,
        data,
        setData,
        diet,
        type,
        dinoNews,
        searchObj,
        setSearchObj,
        searchDinosaurs,
        locationCoordinates,
        setMatchedItems,
        selectedDinosaur,
        setSelectedDinosaur,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
