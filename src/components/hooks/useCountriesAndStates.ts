"use client"


import { useEffect, useState } from "react";
import { Country, State } from "country-state-city";



/**
 * Hook to fetch and provide countries and states data.
 */
const useCountriesAndStates = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("NG");

  useEffect(() => {
    // Fetch and transform countries data
    const fetchedCountries = Country.getAllCountries().map((country) => ({
      value: country.name,
      label: country.name,
      isoCode: country.isoCode,
      phoneCode: country.phonecode,
    }));
    setCountries(fetchedCountries);
  }, []);

  useEffect(() => {
    if (selectedCountryCode) {
      // Fetch and transform states data for the selected country
      const fetchedStates = State.getStatesOfCountry(selectedCountryCode).map(
        (state) => ({
          value: state.name,
          label: state.name,
          isoCode: state.isoCode,
          countryCode: state.countryCode,
        })
      );
      setStates(fetchedStates);
    } else {
      setStates([]);
    }
  }, [selectedCountryCode]);

  return {
    countries,
    states,
    setSelectedCountryCode, // Function to set the selected country code
  };
};

export default useCountriesAndStates;


export const useStaffCountriesAndStates = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountryCode, setSelectedCountryCode] = useState("NG");

  useEffect(() => {
    // Fetch and transform countries data
    const fetchedCountries = Country.getAllCountries().map((country) => ({
      value: country.name,
      label: country.name,
      isoCode: country.isoCode,
      phoneCode: country.phonecode,
    }));
    setCountries(fetchedCountries);
  }, []);

  useEffect(() => {
    if (selectedCountryCode) {
      // Fetch and transform states data for the selected country
      const fetchedStates = State.getStatesOfCountry(selectedCountryCode).map(
        (state) => ({
          value: state.name,
          label: state.name,
          isoCode: state.isoCode,
          countryCode: state.countryCode,
        })
      );
      setStates(fetchedStates);
    } else {
      setStates([]);
    }
  }, [selectedCountryCode]);

  return {
    countries,
    states,
    setSelectedCountryCode, // Function to set the selected country code
  };
};

;
