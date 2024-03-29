import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useContext } from "react";
import { AppContext } from "../context/Context";

const customIcon = new L.Icon({
  iconUrl: "/dino-print.png",
  iconSize: [30, 30],
});

function Map() {
  const { locationCoordinates } = useContext(AppContext);

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
        {locationCoordinates.map(({ dinosaur, coordinates }) =>
          coordinates.map((coordinate, index) => (
            <Marker
              key={`${dinosaur.name}-${index}`}
              position={coordinate}
              icon={customIcon}
            >
              <Popup maxWidth="100%" maxHeight="auto">
                <h3>{dinosaur.name}</h3>
                <div className="img-container">
                  <img
                    className="popup-img"
                    src={dinosaur.imageSrc}
                    alt={dinosaur.name}
                  />
                </div>
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </div>
  );
}

export default Map;
