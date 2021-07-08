import React from "react";
import { Link } from "react-router-dom";

import "../scss/card.scss";

export default function MachineCard({ image, title, id }) {
  return (
    <>
      <div className="col-lg-3">
        <div className="card">
          <Link to={`/details/${id}`}>
            <img className="img-fluid" src={image} alt={title} />
            <div className="title">
              <h2>{title}</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
