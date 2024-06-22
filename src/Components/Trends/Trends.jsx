import React from "react";
import "./Trends.css";
import TrendsCard from "../Cards/TrendsCard";
function Trends() {
  const trendsData = [
    {
      itemName: "D'EVOLs",
      itemCreator: "Oliver",
      img: "img/image 6.png",
      price: 432,
    },
    {
      itemName: "BBwolf",
      itemCreator: "Oscar",
      img: "img/image 6 (2).png",
      price: 156,
    },
    {
      itemName: "JBlack",
      itemCreator: "Archie",
      img: "img/image 6 (3).png",
      price: 290,
    },
  ];
  return (
    <div className="container-fluid position-relative ">
      <div className="container-fluid container-xl  mt-5 pt-5">
        <div className="header_container_title   d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <div className="d-flex align-items-center justify-content-center bg_gradient_main_site rounded-circle icon_header_container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M11.4802 32C11.7002 31.02 11.3002 29.62 10.6002 28.92L5.74021 24.06C4.22021 22.54 3.62021 20.92 4.06021 19.52C4.52021 18.12 5.94021 17.16 8.06021 16.8L14.3002 15.76C15.2002 15.6 16.3002 14.8 16.7202 13.98L20.1602 7.08C21.1602 5.1 22.5202 4 24.0002 4C25.4802 4 26.8402 5.1 27.8402 7.08L31.2802 13.98C31.5402 14.5 32.0802 15 32.6602 15.34L11.1202 36.88C10.8402 37.16 10.3602 36.9 10.4402 36.5L11.4802 32ZM37.4002 28.924C36.6802 29.644 36.2802 31.024 36.5202 32.004L37.9002 38.024C38.4802 40.524 38.1202 42.404 36.8802 43.304C36.3535 43.6721 35.7226 43.8614 35.0802 43.844C34.0602 43.844 32.8602 43.464 31.5402 42.684L25.6802 39.204C24.7602 38.664 23.2402 38.664 22.3202 39.204L16.4602 42.684C14.2402 43.984 12.3402 44.204 11.1202 43.304C10.6602 42.964 10.3202 42.504 10.1002 41.904L34.4202 17.584C35.3402 16.664 36.6402 16.244 37.9002 16.464L39.9202 16.804C42.0402 17.164 43.4602 18.124 43.9202 19.524C44.3602 20.924 43.7602 22.544 42.2402 24.064L37.4002 28.924Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="text-light">
              <h5 className="fs-3 fw-medium">پر بازدیدترین ها</h5>
              <span className="fs-4 fw-light">Trends</span>
            </div>
          </div>

          <div className="">
            <a href="#">
              <span className="fs-5 text-light">مشاهده همه</span>
              <img src="img/arrowleft.png" className="arrowleft" alt="" />
            </a>
          </div>
        </div>
        <div className="row">
          {trendsData.map((data) => (
            <TrendsCard {...data} key={data.itemName} />
          ))}
        </div>
      </div>
      <div className="Ellipse_3 rounded-circle position-absolute z-n1"></div>
    </div>
  );
}

export default Trends;
