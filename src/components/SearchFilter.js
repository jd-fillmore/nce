import React, { useState } from "react";
import { useAPI } from "../context/apiContext";
import MachineList from "./MachineList";

import "../scss/search.scss";
import "../scss/dropdown.scss";

export default function SearchFilter() {
  // Load in global state
  const { data, isLoading } = useAPI();

  // Initiate search value and selected categories in local state
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // SEARCH BAR - filter based on model
  const filteredSearch = ({ model }) => {
    // Searches through 'model' in the API, returns the first instance of whatever the user searched
    return model.indexOf(searchValue) >= 0;
  };

  // DROPDOWN - filter based on category
  let filteredCategories = data;
  // If the category's not "All", filter through the data and match the category the user selects
  if (selectedCategory !== "All") {
    filteredCategories = data.filter(
      (machine) => machine.category === selectedCategory
    );
  }

  return (
    <>
      <div className="row">
        <div className="col-lg-9">
          {/* Search */}
          {/* On typing, set the search value to what the user types */}
          {/* The value of the input itself is the search value */}
          <input
            className="search"
            aria-label="search"
            type="text"
            placeholder="Search by model..."
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </div>
        <div className="col-lg-3">
          {/* Dropdown */}
          <div className="options">
            {/* Once the data is loaded, load in the dropdown */}
            {!isLoading ? (
              <>
                <select
                  value={selectedCategory}
                  aria-label="choose a product"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="product-dropdown"
                  name="product-dropdown"
                >
                  <option value="All">All Categories</option>
                  {data.map((item) => (
                    <option value={item.category} key={item.id}>
                      {item.category}
                    </option>
                  ))}
                </select>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>
      {/* List of machines */}
      {!isLoading ? (
        <>
          <MachineList
            filteredSearch={filteredSearch}
            filteredCategories={filteredCategories}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
