import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

const NewYorkMap = () => {
  const newYorkCenter: LatLngExpression = [40.7128, -74.006];

  const mobileStyle = {
    height: "300px",
  };

  const defaultStyle = {
    height: "500px",
  };

  return (
    <MapContainer
      center={newYorkCenter}
      zoom={13}
      style={{
        width: "100%",
        borderRadius: "10px",
        ...(window.innerWidth <= 968 ? mobileStyle : defaultStyle),
      }}
      scrollWheelZoom={false}
      doubleClickZoom={true}
      dragging={true}
    >
      <TileLayer
        url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
        subdomains={["mt1", "mt2", "mt3"]}
      />
    </MapContainer>
  );
};

export default NewYorkMap;
