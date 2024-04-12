import {
  APIProvider,
  Map as DinoMap,
  AdvancedMarker,
  InfoWindow,
  Pin,
} from "@vis.gl/react-google-maps";
import { useContext, useState, useMemo, useRef } from "react";
import { AppContext } from "../context/Context";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

function Map() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;
  const zoom = 2;
  const mapCenter = { lat: 0, lng: 0 };
  const { locationCoordinates } = useContext(AppContext);
  const [openPopups, setOpenPopups] = useState([]);
  const noDinoImage = "N/A";

  const markerRefs = useRef([]);

  useMemo(() => {
    const refs = locationCoordinates.flatMap(({ coordinates }) =>
      coordinates.map(() => ({
        current: null,
      }))
    );
    markerRefs.current = refs;
  }, [locationCoordinates]);

  const handleMarkerClick = (index) => {
    setOpenPopups((prevOpenPopups) => {
      const newOpenPopups = [...prevOpenPopups];
      newOpenPopups[index] = !newOpenPopups[index];
      return newOpenPopups;
    });
  };

  const handleWindowClose = (index) => {
    setOpenPopups((prevOpenPopups) => {
      const newOpenPopups = [...prevOpenPopups];
      newOpenPopups[index] = false;
      return newOpenPopups;
    });
  };

  return (
    <div className="map-container">
      <MapContainer
        center={[0, 0]}
        zoom={2}
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
