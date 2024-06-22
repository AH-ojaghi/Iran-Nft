import React from "react";

const PropertyCard = ({ id, title, img, caption }) => {
  return (
    <div className="col-12 col-lg-4">
      <div
        className={`box_property  mb-3 m-lg-0 box_property_${id}  position-relative text-start d-flex px-3 pt-2 pt-lg-5 justify-content-center flex-column text-light rounded-3`}
      >
        <div className="icon_box_property rounded-4 position-absolute  d-flex justify-content-center align-items-center">
          <img src={img} alt="" />
        </div>
        <h4 className="fs-2 mb-3">{title}</h4>
        <p className="fw-light fs-5 lh-lg">{caption}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
