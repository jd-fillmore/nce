import React from "react";

import "../scss/header.scss";

export default function Header({ title, subTitle }) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1>{title}</h1>
              <p>{subTitle}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
