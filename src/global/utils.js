export const getFetchData = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (e) {
    alert(e);
    console.error(e);
  }
};

// const geocodingApiKey = import.meta.env.VITE_GOOGLE_GEOCODING_API_KEY;
const geocodingApiKey = import.meta.env.GOOGLE_API_KEY;

export const getLocationCoordinates = async (locationName) => {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${locationName}&key=${geocodingApiKey}`
    );
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return [lat, lng];
    } else {
      throw new Error("No results found for this location.");
    }
  } catch (error) {
    console.error("Error fetching the locations coordinates", error);
    return null;
  }
};
