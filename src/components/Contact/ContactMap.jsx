import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

// Leaflet marker icon fix (sometimes Leaflet marker icon doesn't show properly in React builds)
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const ContactMap = ({ position }) => {
  return (
    <MapContainer
      center={position}
      zoom={11}
      scrollWheelZoom={false}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          DreamNest Realty
          <br />
          Nashik
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
