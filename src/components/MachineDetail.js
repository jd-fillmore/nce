import React from "react";
import Header from "../components/Header";

export default function MachineDetail({ image, title, weight, power }) {
  return (
    <>
      <Header title="Product title" subTitle="Product category" />
      <div className="card">
        <h2>Machine Detail</h2>
        <p>Machine detail content goes here</p>
      </div>
    </>
  );
}
