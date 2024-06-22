import React from "react";
import "./NewsLetters.css";
function NewsLetters() {
  return (
    <div className="container-fluid container-xl  mt-5 ">
      <div className="section_news_letters p-3 rounded-5 position-relative overflow-hidden">
        <div className="cover_bg_news_letters text-light d-flex flex-column align-items-center justify-content-center rounded-4 w-100 h-100">
          <h5 className="fs-1 fw-bold mb-3">عضویت در خبرنامه</h5>
          <p className="fs-5">
            به جامعه Art Token بپیوندید تا در جریان آخرین اخبار، ویژگی‌ها و نکات
            مربوط به این بازار قرار بگیرید.
          </p>
          <form action="" className="form_news_letters mt-4">
            <div className="input-group input-group-lg w-100 z-3">
              <input
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                className="form-control fs-3  rounded-end-pill py-[9px] py-sm-3 border-0 text-secondary"
              />
              <button className="input-group-text rounded-start-pill bg_07101D text-light border-0 px-3 py-sm-3 px-sm-5">
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetters;
