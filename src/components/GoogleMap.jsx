import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function GoogleMap() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId = import.meta.env.VITE_GOOGLE_MAPS_MAP_ID;
  const zoom = 2;
  const mapCenter = { lat: 0, lng: 0 };

  return (
    <APIProvider apiKey={apiKey}>
      <div style={{ height: "700px", width: "100%" }}>
        <Map zoom={zoom} center={mapCenter} mapId={mapId}>
          <AdvancedMarker position={mapCenter}></AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
