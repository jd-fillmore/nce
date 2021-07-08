import React, { useContext } from "react";
import { useAPI } from "../context/apiContext";
import Header from "../components/Header";

export default function MachineDetail() {
  // Load in global state
  const { data, isLoading } = useAPI();
  return (
    <>
      <Header title="Product title" subTitle="Product category" />
      {!isLoading ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <img src={data.model.image} alt="" />
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
