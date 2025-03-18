import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const mallCenter: LatLngExpression = [40.3772, 49.8476];

const mallIcon = icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -48],
});

const openInMaps = () => {
  const lat = 40.3772;
  const lng = 49.8476;
  const url =
    /iPhone|iPad|iPod/i.test(navigator.userAgent)
      ? `maps://maps.apple.com/?q=28+Mall&ll=${lat},${lng}`
      : `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`; 

  window.open(url, "_blank");
};

const MallMap = () => {

  return (
    <div style={{ textAlign: "center" }}>
      <MapContainer
        center={mallCenter}
        zoom={16}
        style={{
          width: "100%",
          borderRadius: "10px",
          height: window.innerWidth <= 768 ? "200px" : "500px"
        }}
        scrollWheelZoom={false}
        doubleClickZoom={true}
        dragging={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={mallCenter} icon={mallIcon}>
          <Popup><b>28 Mall</b><br/>Baku, Azerbaijan</Popup>
        </Marker>
      </MapContainer>
      <button
        onClick={openInMaps}
        style={{
          marginTop: "20px",
          marginBottom: "40px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          width: window.innerWidth <= 768 ? "100%" : "auto", 
        }}
      >
        Telefonda Göstər 📍
      </button>
    </div>
  );
};

export default MallMap;
