import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapContainer = ({ google }) => {
  const [userLocation, setUserLocation] = useState('');
  const [pinLocation, setPinLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 }); // Default center

  useEffect(() => {
    if (pinLocation) {
      setMapCenter({ lat: pinLocation.lat(), lng: pinLocation.lng() });
    }
    else{
        const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: "boston" }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        setPinLocation(location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
    }
  }, [pinLocation]);

  const handleLocationSubmit = (event) => {
    event.preventDefault();
    // Use geocoding to convert user input to lat lng
    
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: userLocation }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        setPinLocation(location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  return (
    <div>
      <form onSubmit={handleLocationSubmit}>
     
      </form>
      <Map
        google={google}
        zoom={13}
        initialCenter={mapCenter}
        draggable={true} // Enable dragging
      >
        {pinLocation && <Marker position={pinLocation} />}
        
        <Marker position={{ lat: 32.12345, lng: 32.12345 }} />
        
      </Map>
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCWLOWG5I01EmjmhN_rQzpv0nRAuR9Bi9o', // Replace with your Google Maps API key
  libraries: ['places'],
  LoadingContainer: () => <div>Loading...</div> 
})(MapContainer);
