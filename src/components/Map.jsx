import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Context";
import { getLocationCoordinates } from "../global/utils";

const customIcon = new L.Icon({
  iconUrl: "/assets/dino-print.png",
  iconSize: [30, 30],
});

function Map({ dinosaurLocation }) {
  const { data } = useContext(AppContext);
  // console.log(data);

  const [locationCoordinates, setLocationCoordinates] = useState([0, 0]);

  useEffect(() => {
    const getCoordinates = async () => {
      try {
        const coordinates = await getLocationCoordinates(dinosaurLocation);
        setLocationCoordinates(coordinates);
        // console.log(coordinates);
      } catch (error) {
        console.error("Unable to get Coordinates", error);
      }
    };
    if (dinosaurLocation) {
      getCoordinates();
    }
  }, [dinosaurLocation]);

  return (
    <div className="map-container">
      <MapContainer
        center={locationCoordinates}
        zoom={2}
        style={{ height: "700px", width: "full" }}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=UO8c2dxT8Xs4hzn7JgSo"
        />
        {locationCoordinates && (
          <Marker position={locationCoordinates} icon={customIcon}>
            <Popup maxWidth="100%" maxHeight="auto">
              {/* <h3>{dinosaurName}</h3> */}
              {/* <div className="img-container">
                <img
                  className="popup-img"
                  src={dinosaurImage}
                  alt={dinosaurName}
                />
              </div> */}
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
export default Map;
