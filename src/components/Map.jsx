import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
// import { MarkerClusterer } from "@googlemaps/markerclusterer";
// import { Marker } from "@googlemaps/markerclusterer";
import { useContext } from "react";
import { AppContext } from "../context/Context";

function Map() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;
  const zoom = 2;
  const mapCenter = { lat: 0, lng: 0 };
  const { locationCoordinates } = useContext(AppContext);

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "700px" }}>
        <Map zoom={zoom} center={mapCenter} mapId={mapId}>
          {locationCoordinates.map(({ dinosaur, coordinates }) =>
            coordinates.map((coordinate, index) => (
              <AdvancedMarker position={coordinate} key={index}>
                <span></span>
              </AdvancedMarker>
            ))
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
export default Map;
