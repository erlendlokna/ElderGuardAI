import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import React from 'react';
import image from '../assets/oldman.png';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});
function Position() {
  const position = [63.40851, 10.40394];
  const customIcon = new L.Icon({
    iconUrl: 'https://www.pngfind.com/pngs/m/13-132776_old-man-walking-with-a-crutch-comments-old.png',
    iconSize: [64, 64],
    iconAnchor: [16, 32],
    opacity: 1,
  });
  const mapStyle = {
    position: 'relative',
    height: '800px',
    border: '0px solid #000',
    borderRadius: '1px',
    overflow: 'hidden',
    padding: '20px',
  };
  const containerStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <div style={mapStyle}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={containerStyle}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Carl Fredricksen. <br /> On a trip.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
export default Position;