import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { APIContext } from "../context/apiContext";
import Header from "../components/Header";

export default function MachineDetail() {
  // Load in global state
  const { data, isLoading } = useContext(APIContext);
  const { id: urlId } = useParams();

  // Turn Represent the ID in the URL as a number (as opposed to a string)
  const parsedId = parseInt(urlId, 10);

  // Reduce all of the product arrays of each into *one* array, makes it easier
  // to find the ID instead of looking through multiple arrays.
  const allProducts = data.reduce(
    (acc, curr) => [...acc, ...curr.product_details],
    []
  );

  // Loop through the flat array created by allProducts, finding whose ID matches the one
  // in the URl.
  const matchingProduct = allProducts.find(({ id }) => id === parsedId);

  if (!matchingProduct) {
    return <p>Sorry, it doesn't look like we have that product anymore</p>;
  }

  return (
    <>
      <Header
        title={matchingProduct.model}
        subTitle={matchingProduct.category}
      />
      {!isLoading ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={matchingProduct.image}
                alt={matchingProduct.model}
              />
            </div>
            <div className="col-lg-6">
              <h2>{matchingProduct.model}</h2>
              <p>{matchingProduct.description}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
