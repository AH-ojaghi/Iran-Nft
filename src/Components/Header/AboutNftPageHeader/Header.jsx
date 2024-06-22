import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      {/* Header */}
      <header className="header  p-5 d-flex justify-content-center align-items-center">
        <div className="d-flex text-light flex-column gap-3">
          <h1 className="fw-bold">ما به سازندگان nft قدرت میدهیم</h1>
          <p className="opacity-75">
            این طلوع جنبش nft هست و برای کسانی که مایل به فعالیت هستند اما تجربه
            ای ندارند اینجا هستیم :)
          </p>
        </div>
      </header>


    </>
  );
};

export default Header;
