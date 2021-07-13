import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const APIContext = createContext();

export default function APIContextProvider({ children }) {
  // Initialize state
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  // Fetch data
  useEffect(() => {
    let url = "../db.json";
    axios
      .get(url)
      .then(function (response) {
        setData(response.data.machines);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <APIContext.Provider value={{ data, isLoading }}>
      {children}
    </APIContext.Provider>
  );
}
