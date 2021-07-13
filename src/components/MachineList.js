import React from "react";
import MachineCard from "./MachineCard";

export default function MachineList({ filteredCategories, filteredSearch }) {
  return (
    <>
      {filteredCategories.map((item) => (
        <>
          <div className="row">
            <div className="col-lg-12">
              <h2>{item.category}</h2>
            </div>
          </div>
          {/* Filter and map through the second level of API */}
          <div className="row">
            {item.product_details.filter(filteredSearch).map((subItem) => (
              <MachineCard
                image={subItem.image}
                title={subItem.model}
                id={subItem.id}
                key={`${subItem.id}-${subItem.models}`}
              />
            ))}
          </div>
        </>
      ))}
    </>
  );
}
