import React from "react";

const TrendsCard = ({ itemName, itemCreator, img, price }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="box_trends">
        <div className="img_box_trend text-center">
          <img src={img} className=" rounded-3" alt="" />
        </div>
        <div className="caption_box_trends rounded-3 px-3">
          <h5 className="text-light fw-medium text-end fs-3">{itemName}</h5>
          <div className="text-light d-flex justify-content-between align-items-center">
            <div>
              <span>{price} ETH</span>
              <img src="img/Vector (2).png" alt="" className="me-3" />
            </div>
            <div>
              <span className="fs-5 ">By {itemCreator}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsCard;
