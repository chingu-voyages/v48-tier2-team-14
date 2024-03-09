import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map({ dinosaurLocation, dinosaurName, dinosaurImage }) {
  return (
    <div className="map-container">
      <MapContainer
        center={dinosaurLocation}
        zoom={5}
        style={{ height: "700px", width: "full" }}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/topo-v2/{z}/{x}/{y}.png?key=UO8c2dxT8Xs4hzn7JgSo"
        />
        {dinosaurLocation && (
          <Marker position={dinosaurLocation}>
            <Popup maxWidth="100%" maxHeight="auto">
              <h3>{dinosaurName}</h3>
              <div className="img-container">
                <img
                  className="popup-img"
                  src={dinosaurImage}
                  alt={dinosaurName}
                />
              </div>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    </div>
  );
}
export default Map;
