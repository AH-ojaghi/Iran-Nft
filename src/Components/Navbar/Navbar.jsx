import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const responsiveNavHandler = () => {
    document.getElementById("navbarNav").classList.toggle("collapse");
  };
  return (
    <nav className="navbar navbar-expand-lg mt-3">
      <div className="container-fluid container-xl">
        <button
          className="navbar-toggler"
          data-bs-target="#navbarNav"
          onClick={responsiveNavHandler}
        >
          <img src="img/navbar-toggler-icon.png" alt="" />
        </button>
        <Link to={"/"} className="navbar-brand text-light fs-1 fw-bold">
          Iran NFT
        </Link>
        <div className="d-lg-none d-flex gap-2">
          <div className="ms-2">
            <img src="img/search.png" alt="" />
          </div>
          <Link to={"/User_Dashboard"}>
            <img src="img/user.png" alt="" />
          </Link>
        </div>
        <div
          className="collapse navbar-collapse justify-content-lg-between bg_dark_md rounded p-2"
          id="navbarNav"
        >
          <ul className="navbar-nav w_70 justify-content-center gap-3">
            <li className="nav-item">
              <Link to={"/"} className="nav-link text-secondary fs-5 fw-bold">
                صفحه اصلی
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/About_Nft"}
                className="nav-link text-secondary  fs-5 fw-bold"
              >
                آموزش NFT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/Nft_Gallery"}
                className="nav-link text-secondary  fs-5 fw-bold"
              >
                گالری NFT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/Advertisement_Nft"}
                className="nav-link text-secondary  fs-5 fw-bold"
              >
                تبلیغ NFT
              </Link>
            </li>
          </ul>
          <div className="d-flex justify-content-end d-lg-block">
            <Link to={"/Shoppingcart"} className="ms-2">
              <img src="img/shoppingcart.png" alt="" />
            </Link>
            <Link
              to={"/SignUp-SignIn"}
              className="bg_FF3C00 text-light fw-bold p-3 rounded-3 d-none d-lg-inline-block"
            >
              <img src="img/user.png" alt="" />
              ورود / ثبت نام
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
