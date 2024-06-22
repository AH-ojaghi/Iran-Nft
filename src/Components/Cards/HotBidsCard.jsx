import React from "react";

const HotBidsCard = ({itemName ,itemCreator ,price ,time ,img}) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="box_hot_bids p-3 rounded-4 position-relative">
        <div className="img_hot_bids">
          <img src={img} alt="" className="w-100 rounded-4" />
          <div className="position-absolute d-flex gap-3">
            <div className="bg_blur rounded-pill fw-bold gap-3 d-flex justify-content-center align-items-center text_time_hot_bids text-light">
              <span>{time.s}</span>
              <span>{time.m}</span>
              <span>{time.h}</span>
            </div>
            <div className="bg_blur d-flex align-items-center justify-content-center hearet_icon_hot_bids rounded-circle">
              <img src="img/heart.png" alt="" />
            </div>
          </div>
        </div>
        <div className="caption_hot_bids text-light">
          <div className="text-end mt-3">
            <h5 className="fs-3 fw-bold">{"Virtualland"}</h5>
            <p className="fs-5 my-3">By {itemCreator}</p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <span className="fs-5">آخرین پیشنهاد</span>
            </div>
            <div>
              <span className="fs-5 ms-3 text_time_hot_bids ">{price} ETH</span>
              <img src="img/Vector (2).png" alt="" />
            </div>
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="bg_gradient_main_site text-center py-2 py-lg-3 text-light fw-bold w-50 rounded-4 d-block"
            >
              پیشنهاد سریع
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotBidsCard;
