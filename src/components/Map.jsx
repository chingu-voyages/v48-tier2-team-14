import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";
import { getLocationCoordinates } from "../global/utils";

const customIcon = new L.Icon({
  iconUrl: "/assets/dino-print.png",
  iconSize: [30, 30],
});

function Map({ selectedDinosaur }) {
  const [locationCoordinates, setLocationCoordinates] = useState([]);

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        if (typeof selectedDinosaur.foundIn === "string") {
          const locations = selectedDinosaur.foundIn
            .split(",")
            .map((location) => location.trim());

          const coordinatesPromises = locations.map(async (location) => {
            const coordinates = await getLocationCoordinates(location);
            return { location, coordinates };
          });

          const locationsWithCoordinates = await Promise.all(
            coordinatesPromises
          );
          setLocationCoordinates(locationsWithCoordinates);
        } else {
          console.error("FoundIn is not a string:", selectedDinosaur.foundIn);
        }
      } catch (error) {
        console.error("Unable to get Coordinates", error);
      }
    };

    if (selectedDinosaur.foundIn) {
      getCoordinates();
    }
  }, [selectedDinosaur]);

  // console.log("Location coordinates:", locationCoordinates);

  return (
    <div className="map-container">
      <MapContainer
        center={[0, 0]}
        zoom={2}
        minZoom={2}
        maxZoom={19}
        style={{ height: "700px", width: "full" }}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=UO8c2dxT8Xs4hzn7JgSo"
        />
        {locationCoordinates.map(({ location, coordinates }) => (
          <Marker key={location} position={coordinates} icon={customIcon}>
            <Popup maxWidth="100%" maxHeight="auto">
              <h3>{selectedDinosaur.name}</h3>
              <div className="img-container">
                <img
                  className="popup-img"
                  src={selectedDinosaur.imageSrc}
                  alt={selectedDinosaur.name}
                />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
