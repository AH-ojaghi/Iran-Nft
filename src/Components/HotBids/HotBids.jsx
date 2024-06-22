import React from "react";
import "./HotBids.css";
import HotBidsCard from "../Cards/HotBidsCard";
function HotBids() {
  const HotBidsData = [
    {
      itemName: "Digi Boy",
      itemCreator: "John",
      img:'img/image 5.png',
      price: 309,
      time: { h: "2h", m: "34m", s: "55s" },
    },
    {
      itemName: "Angry Ape",
      itemCreator: "Billie",
      img:'img/image 5 (3).png',
      price: 138,
      time: { h: "1h", m: "4m", s: "33s" },
    },
    {
      itemName: "Virtualand",
      itemCreator: "Michael",
      img:'img/image 5 (2).png',
      price: 235,
      time: { h: "23h", m: "4m", s: "10s" },
    },
  ];
  return (
    <div className="container-fluid position-relative ">
      <div className="container-fluid container-xl mt-5 ">
        <div className="header_container_title mb-5 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center justify-content-center bg_gradient_main_site rounded-circle icon_header_container">
              <img src="img/Vector (4).png" alt="" />
            </div>
            <div className="text-light">
              <h5 className="fs-3 fw-medium">پیشنهادهای داغ</h5>
              <span className="fs-4 fw-light">Hot Bids</span>
            </div>
          </div>

          <div className="">
            <a href="#">
              <span className="fs-5 text-light">مشاهده همه</span>
              <img src="img/arrowleft.png" className="arrowleft" alt="" />
            </a>
          </div>
        </div>
        <div className="row row-gap-2">
          {HotBidsData.map(data =>(
            <HotBidsCard {...data} key={data.itemName}/>
          ))}
        </div>
      </div>
      <div className="Ellipse_2"></div>
    </div>
  );
}

export default HotBids;
