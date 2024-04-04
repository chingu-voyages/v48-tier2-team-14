import {
  APIProvider,
  Map as DinoMap,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useContext, useState, useMemo, useRef } from "react";
import { AppContext } from "../context/Context";

function Map() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;
  const zoom = 2;
  const mapCenter = { lat: 0, lng: 0 };
  const { locationCoordinates } = useContext(AppContext);
  const [openPopups, setOpenPopups] = useState([]);

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
        <DinoMap defaultZoom={zoom} defaultCenter={mapCenter} mapId={mapId}>
          {locationCoordinates.flatMap(({ dinosaur, coordinates }, idx) =>
            coordinates.map((coordinate, index) => {
              const popupIndex = idx * coordinates.length + index;
              return (
                <div key={popupIndex}>
                  <AdvancedMarker
                    ref={(ref) => (markerRefs.current[popupIndex] = ref)}
                    position={coordinate}
                    onClick={() => handleMarkerClick(popupIndex)}
                  />
                  {openPopups[popupIndex] && (
                    <InfoWindow
                      anchor={markerRefs.current[popupIndex]}
                      maxWidth="100%"
                      height="auto"
                      onCloseClick={() => handleWindowClose(popupIndex)}
                    >
                      <h3>{dinosaur.name}</h3>
                      <div className="img-container">
                        <img
                          className="popup-img"
                          src={dinosaur.imageSrc}
                          alt={dinosaur.name}
                        />
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
