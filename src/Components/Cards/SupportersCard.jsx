import React from "react";

const SupportersCard = ({ jobTitle, supName, img }) => {
  return (
    <div className=" d-flex flex-column justify-content-center align-items-center">
      <div className="position-relative  d-flex flex-column justify-content-center align-items-center">
        <a
          href="https://www.linkedin.com/"
          className="rounded-circle bg-dark linkedin_circle position-absolute"
        >
          in
        </a>
        <img
          src={img}
          alt=""
          className="rounded-circle "
          style={{ width: "13rem" }}
        />
      </div>

      <div className=" d-flex flex-column justify-content-center align-items-center">
        <h3>{jobTitle}</h3>
        <p className="fw-lighter">{supName}</p>
      </div>
    </div>
  );
};

export default SupportersCard;
