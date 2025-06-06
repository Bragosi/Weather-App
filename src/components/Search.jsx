import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import logo from "../images/bragosiLogo2 (2).png";
import { Geo_Api_Url, geoApioptions } from "../constant/API";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);

  // Asynchronous function to fetch cities
  const loadOptions = (inputValue) => {
    return fetch(
      `${Geo_Api_Url}?minPopulation=1000000&namePrefix=${inputValue}`, // API URL with query parameters
      geoApioptions
    )
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        return {
          options: data?.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          })),
        };
      })
      .catch((error) => {
        console.error("Error fetching cities:", error.message || error);
        return { options: [] }; // Return an empty options array on error
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div className="w-full relative flex flex-row gap-3 p-3">
      <div className="relative mt-[-20px]">
        <img src={logo} alt="logo" width={60} height={40} />
      </div>
      <div className="relative w-full">
        <AsyncPaginate
          placeholder="Search for City"
          debounceTimeout={600}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
        />
      </div>
    </div>
  );
};

export default Search;
