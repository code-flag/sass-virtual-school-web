"use client"


import { useState, useEffect } from 'react';

function useIsNigeria() {
  const [isNigeria, setIsNigeria] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to get user's location
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // Check if the location is in Nigeria
            checkIfNigeria(latitude, longitude);
          },
          (err) => {
            setError(err.message);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    // Call the function to get location
    getLocation();
  }, []);

  const checkIfNigeria = (lat, lon) => {
    // Nigeria's approximate latitude and longitude boundaries
    const nigeriaLatMin = 4.272;  // Southernmost point
    const nigeriaLatMax = 13.865; // Northernmost point
    const nigeriaLonMin = 2.676;  // Westernmost point
    const nigeriaLonMax = 14.678; // Easternmost point

    // Check if the latitude and longitude fall within Nigeria's boundaries
    if (
      lat >= nigeriaLatMin &&
      lat <= nigeriaLatMax &&
      lon >= nigeriaLonMin &&
      lon <= nigeriaLonMax
    ) {
      setIsNigeria(true);
    } else {
      setIsNigeria(false);
    }
  };

  return { isNigeria, error };
}

export default useIsNigeria;
