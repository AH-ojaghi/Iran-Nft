import React from "react";

const TargetCards = ({ title, desc, img, id }) => {
  return (
    <>
      <div
        className={`col-12 col-sm-8 translate_top ${
          Math.ceil(id % 2) === 0 ? "translate_top" : "translate_btm"
        } col-md-4`}
      >
        <img className="w-75" src={img} alt="" />
        <h2>{title}</h2>
        <p className="fw-light">{desc}</p>
      </div>
    </>
  );
};

export default TargetCards;
