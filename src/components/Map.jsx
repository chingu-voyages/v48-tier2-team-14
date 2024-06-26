import {
  APIProvider,
  Map as DinoMap,
  AdvancedMarker,
  InfoWindow,
  Pin,
} from "@vis.gl/react-google-maps";
import { useContext, useState, useMemo, useRef } from "react";
import { AppContext } from "../context/Context";

function Map() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;
  const zoom = 1.75;
  const mapCenter = { lat: 20, lng: 10 };
  const { locationCoordinates, selectedDinosaur, setSelectedDinosaur } =
    useContext(AppContext);
  const [openPopups, setOpenPopups] = useState([]);
  const noDinoImage = "N/A";
  const markerRefs = useRef([]);
  const [isActive, setIsActive] = useState(false);
  const [isNewWindow, setIsNewWindow] = useState(false);

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
      newOpenPopups[index] = true;

      for (let i = 0; i < newOpenPopups.length; i++) {
        if (i !== index) {
          newOpenPopups[i] = false;
        }
      }
      setIsActive(true);
      setIsNewWindow(false);
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

  const handleSelectedDinosaur = (dinosaur) => {
    setSelectedDinosaur(dinosaur);
    setIsActive(!isActive);
    setIsNewWindow(isActive);
  };

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "532px" }}>
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
                      background={
                        selectedDinosaur === dinosaur ? "#ffba08" : "#008080"
                      }
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
                      <div
                        className="popup-container"
                        onClick={() => handleSelectedDinosaur(dinosaur)}
                        style={{
                          filter: !isActive
                            ? "drop-shadow(0 0 8px rgba(0, 0, 0, 0.2))"
                            : "none",
                        }}
                      >
                        <h3 className="popup-text">{dinosaur.name}</h3>
                        <div className="img-container">
                          {dinosaur.imageSrc === noDinoImage ? (
                            <img
                              className="popup-img"
                              src="/dinosaur-placeholder.png"
                              alt={dinosaur.name}
                              style={{ background: "#ffffff", padding: "10px" }}
                            />
                          ) : (
                            <img
                              className="popup-img"
                              src={dinosaur.imageSrc}
                              alt={dinosaur.name}
                            />
                          )}
                        </div>
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
