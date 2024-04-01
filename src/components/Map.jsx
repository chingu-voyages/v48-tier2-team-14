import {
  APIProvider,
  Map as DinoMap,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
// import { MarkerClusterer } from "@googlemaps/markerclusterer";
// import { Marker } from "@googlemaps/markerclusterer";
import { useContext, useState } from "react";
import { AppContext } from "../context/Context";

function Map() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;
  const zoom = 2;
  const mapCenter = { lat: 0, lng: 0 };
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [selectedDinosaur, setSelectedDinosaur] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const { locationCoordinates } = useContext(AppContext);

  const handleMarkerClick = (dinosaur) => {
    if (selectedDinosaur === dinosaur) {
      setOpenPopup(!openPopup);
    } else {
      setSelectedDinosaur(dinosaur);
      setOpenPopup(true);
    }
  };

  const handleWindowClose = () => {
    setOpenPopup(null);
  };

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "700px" }}>
        <DinoMap zoom={zoom} center={mapCenter} mapId={mapId}>
          {locationCoordinates.map(({ dinosaur, coordinates }) =>
            coordinates.map((coordinate, index) => (
              <AdvancedMarker
                ref={markerRef}
                position={coordinate}
                key={index}
                onClick={() => handleMarkerClick(dinosaur)}
              >
                <Pin />
              </AdvancedMarker>
            ))
          )}
          {openPopup && selectedDinosaur && (
            <InfoWindow
              anchor={marker}
              maxWidth="100%"
              height="auto"
              onCloseClick={() => handleWindowClose()}
            >
              <h3>{selectedDinosaur.name}</h3>
              <div className="img-container">
                <img
                  className="popup-img"
                  src={selectedDinosaur.imageSrc}
                  alt={selectedDinosaur.name}
                />
              </div>
            </InfoWindow>
          )}
        </DinoMap>
      </div>
    </APIProvider>
  );
}
export default Map;
