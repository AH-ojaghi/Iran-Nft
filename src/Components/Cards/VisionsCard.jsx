import React from "react";

const VisionsCard = ({ id, title, item, condition }) => {
  console.log(condition);
  return (
    <div className=" col-lg-6  d-flex flex-column justify-content-center align-items-center ">
      <div className="d-flex gap-3 justify-content-start align-items-center">
        <h3
          className="h3 fw-bold pb-2 "
          style={{ color: !condition && "#ff0a6c", fontFamily: "Gilroy_Bold" }}
        >
          {title}
        </h3>
        <button
          className="px-4 py-0 border-0 mb-3 rounded-pill"
          style={{
            background: condition ? "rgba(0,177,64,.2)" : "rgba(243,112,33,.2)",
            color: condition ? "#00b140" : "#f37021",
          }}
        >
          {condition ? "کامل" : "در دست اقدام"}
        </button>
      </div>
      <div className="px-5 pt-3 mb-5  border-end border-secondary border-1">
        <ul
          className="d-flex flex-column gap-2 fw-lighter"
          style={{ listStyleType: "disc" }}
        >
          {item.map((data) => (
            <li key={crypto.randomUUID()}>{data}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VisionsCard;
