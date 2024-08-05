import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapComponent: React.FC = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [markerPosition, setMarkerPosition] =
    useState<google.maps.LatLngLiteral | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setMarkerPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setLoading(false);
      },
      (error) => {
        console.error("Error getting user location:", error);
        setLoading(false);
      }
    );
  }, []);

  const handleMapLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  };

  const handleMarkerDragEnd = (event: any) => {
    setMarkerPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
    setLatitude(event.latLng.lat());
    setLongitude(event.latLng.lng());
  };

  const center = markerPosition || { lat: 37.7749, lng: -122.4194 };

  useEffect(() => {}, [markerPosition]);
  return (
    <LoadScript googleMapsApiKey="AIzaSyCLVG_eBiuKsXQuqmA0VgHdcXWK8KeGt1Y">
      {!loading && (
        <GoogleMap
          mapContainerStyle={{ width: "500px", height: "400px" }}
          zoom={13}
          center={center}
          onLoad={handleMapLoad}
        >
          {markerPosition && (
            <Marker
              position={center}
              draggable={true}
              onDragEnd={handleMarkerDragEnd}
            />
          )}
        </GoogleMap>
      )}
    </LoadScript>
  );
};

export default GoogleMapComponent;
