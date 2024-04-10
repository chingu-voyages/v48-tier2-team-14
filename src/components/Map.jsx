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
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "700px" }}>
        <DinoMap
          minZoom={zoom}
          defaultZoom={zoom}
          defaultCenter={mapCenter}
          mapId={mapId}
          streetViewControl={false}
          mapTypeControl={false}
        >
          {locationCoordinates.flatMap(({ dinosaur, coordinates }, idx) =>
            coordinates.map((coordinate, index) => {
              const popupIndex = `${dinosaur.name}-${idx}-${index}`;
              return (
                <div key={popupIndex}>
                  <AdvancedMarker
                    ref={(ref) => (markerRefs.current[popupIndex] = ref)}
                    position={coordinate}
                    onClick={() => handleMarkerClick(popupIndex)}
                  >
                    <Pin
                      background={"#008080"}
                      glyphColor={"#ffd60a"}
                      borderColor={"#000"}
                    />
                  </AdvancedMarker>
                  {openPopups[popupIndex] && (
                    <InfoWindow
                      anchor={markerRefs.current[popupIndex]}
                      maxWidth="100%"
                      height="auto"
                      onCloseClick={() => handleWindowClose(popupIndex)}
                    >
                      <h3>{dinosaur.name}</h3>
                      <div className="img-container">
                        {dinosaur.imageSrc === noDinoImage ? (
                          <img
                            className="popup-img"
                            src="/dinosaur-placeholder.png"
                            alt={dinosaur.name}
                          />
                        ) : (
                          <img
                            className="popup-img"
                            src={dinosaur.imageSrc}
                            alt={dinosaur.name}
                          />
                        )}
                      </div>
                    </InfoWindow>
                  )}
                </div>
              );
            })
          )}
        </DinoMap>
      </div>
    </APIProvider>
  );
}

export default Map;
