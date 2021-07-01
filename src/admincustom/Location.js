import React from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';

  import Geocode from "react-geocode";
  Geocode.setApiKey("AIzaSyD94QPtNajpsZwIstIcN1n6opPRb2YKpZE");
  Geocode.setLanguage("en");
  Geocode.setRegion("es");
  Geocode.setLocationType("ROOFTOP");




export default function Location() {
        const [address, setaddress] = React.useState("")




      const  handleChange = address => {
            setaddress(address)
            Geocode.fromAddress(address).then(
              (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
              },
              (error) => {
                console.error(error);
              }
            );
          };
          

    const handleSelect = address => {
      Geocode.fromAddress(address ).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
        },
        (error) => {
          console.error(error);
        }
      );
      setaddress(address)
        geocodeByAddress(address)
          .then(results => {
              console.log(results,"<<--result")
            getLatLng(results[0])})
          .then(latLng => console.log('Success', latLng))
          .catch(error => console.error('Error', error));
      };





    return (
        <>
        <PlacesAutocomplete
        value={address}
        onChange={(e)=>handleChange(e)}
        onSelect={(e)=>handleSelect(e)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>  
        </>
    )
}
