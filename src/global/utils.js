export const getFetchData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    alert(e);
    console.error(e);
  }
};

const geocodingApiKey = import.meta.env.VITE_GOOGLE_API_KEY;

export const getLocationCoordinates = async (locationName) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}&key=${geocodingApiKey}`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng }; // Return an object with lat and lng properties
    } else {
      throw new Error("No results found for this location.");
    }
  } catch (error) {
    console.error("Error fetching the locations coordinates", error);
    return null;
  }
};
const newsApiKey = import.meta.env.VITE_G_NEWS_API_KEY;

export const getDinoNews = async () => {
  const url = `https://gnews.io/api/v4/search?q=dinosaurs&lang=en&max=9&apikey=${newsApiKey}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const randomiseGeoCoords = (min, max) => {
  return Math.random() * (max - min) + min;
};
