import React from "react";
import "./Header.css";
function Header() {
  return (
    <>
      <header>
        <div className="container-fluid container-xl mt-5">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div>
                <p className="text-light fw-light fs-4 text-center text-lg-start">
                  بازار جهانی توکن‌های غیرمثلی بر بستر بلاکچین پلیگان
                </p>
                <h1 className="fw-bold title_main_header text-center text-lg-start my-5">
                  <span className="text-light">دنیای NFT های</span>
                  <span className="text_FF3C00">شگفت انگیز</span>
                </h1>
                <div className="main_img_header position-relative d-lg-none">
                  <img src="img/header_img.png" className="w-100" alt="" />
                  <div className="count_user_site py-1 position-absolute rounded-4 d-flex align-items-center justify-content-between px-4">
                    <img src="img/Group 117.png" alt="" />
                    <div className="text-light fw-bold ">
                      <span className="fs-5">+500</span>
                      <span className="fs-5">هنرمند</span>
                    </div>
                  </div>
                </div>
                <p className="text-secondary fw-medium fs-3 text-center text-lg-start">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است
                </p>
              </div>
              <div className="d-flex gap-3 mt-5 justify-content-center">
                <form
                  action=""
                  className="border_FF3C00 border d-none d-lg-block rounded-pill position-relative w-50 search_form_header px-2"
                >
                  <button className="border-0 bg-transparent me-2 position-absolute">
                    <img src="img/searchnormal1.png" alt="" />
                  </button>
                  <input
                    type="text"
                    className="bg-transparent w-100 h-100 border-0 fs-4 fw-medium text-light pe-5 "
                    style={{ outline: "none" }}
                    placeholder="جستجو NFT و هنرمندان"
                  />
                </form>
                <a
                  href="#"
                  className="w-50 py-3 d-none d-lg-block bg_gradient_main_site text-light fw-bold fs-4 text-center rounded-pill d-flex align-items-center justify-content-center"
                >
                  دریافت مشاوره رایگان
                </a>
                <a
                  href="#"
                  className="w-50 py-3  d-lg-none bg_gradient_main_site text-light fw-bold fs-5 text-center rounded-3 d-flex align-items-center justify-content-center"
                >
                  دریافت مشاوره رایگان
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-12 d-none d-lg-block">
              <div className="main_img_header position-relative">
                <img src="img/header_img.png" className="w-100" alt="" />
                <div className="count_user_site py-1 position-absolute rounded-4 d-flex align-items-center justify-content-between px-4">
                  <img src="img/Group 117.png" alt="" />
                  <div className="text-light fw-bold ">
                    <span className="fs-5">+500</span>
                    <span className="fs-5">هنرمند</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
