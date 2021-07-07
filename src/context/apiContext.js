import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

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

// Create a hook to use the APIContext, this is a Kent C. Dodds pattern
export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
