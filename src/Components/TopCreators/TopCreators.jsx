import React from "react";
import "./TopCreators.css";
import TopCreatorsCard from "../Cards/TopCreatorsCard";
function TopCreators() {
  const creatorsData = [
    {
      id: 1,
      creatoreName: "Olivia",
      totalSales: 2245,
      img: "img/screen-0.jpg",
    },
    { id: 2, creatoreName: "Emma", totalSales: 4952, img: "img/images.jpeg" },
    {
      id: 3,
      creatoreName: "Mateo",
      totalSales: 4212,
      img: "img/main-qimg.jpeg",
    },
    {
      id: 4,
      creatoreName: "Levi",
      totalSales: 2345,
      img: "img/unnamed (1).jpg",
    },
    {
      id: 5,
      creatoreName: "Henry",
      totalSales: 3095,
      img: "img/images (1).jpeg",
    },
    { id: 6, creatoreName: "Eren", totalSales: 2983, img: "img/unnamed.jpg" },
  ];
  return (
    <div className="container-fluid container-xl  mt-5 pt-5">
      <div className="header_container_title mb-5  d-flex justify-content-between align-items-center">
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
                d="M23.9998 24C26.652 24 29.1955 22.9464 31.0709 21.0711C32.9463 19.1957 33.9998 16.6522 33.9998 14C33.9998 11.3478 32.9463 8.8043 31.0709 6.92893C29.1955 5.05357 26.652 4 23.9998 4C21.3477 4 18.8041 5.05357 16.9288 6.92893C15.0534 8.8043 13.9998 11.3478 13.9998 14C13.9998 16.6522 15.0534 19.1957 16.9288 21.0711C18.8041 22.9464 21.3477 24 23.9998 24ZM23.9998 29C13.9798 29 5.81982 35.72 5.81982 44C5.81982 44.56 6.25982 45 6.81982 45H41.1798C41.7398 45 42.1798 44.56 42.1798 44C42.1798 35.72 34.0198 29 23.9998 29Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="text-light">
            <h5 className="fs-3 fw-medium">هنرمندان برتر</h5>
            <span className="fs-4 fw-light">Top Creators</span>
          </div>
        </div>

        <div className="">
          <a href="#">
            <span className="fs-5 text-light">مشاهده همه</span>
            <img src="img/arrowleft.png" className="arrowleft" alt="" />
          </a>
        </div>
      </div>
      <div className="row row-gap-3">
        {creatorsData.map((data) => (
          <TopCreatorsCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
}

export default TopCreators;
