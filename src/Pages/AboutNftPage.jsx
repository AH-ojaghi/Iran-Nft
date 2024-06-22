import React from "react";
import Header from "../Components/Header/AboutNftPageHeader/Header";
import TargetCards from "../Components/Cards/TargetCards";
import VisionsCard from "../Components/Cards/VisionsCard";
import SupportersCard from "../Components/Cards/SupportersCard";
import './AboutNftPage.css'

const AboutNftPage = () => {
  const targetsData = [
    {
      id: 1,
      title: "اهداف",
      desc: "پذیرش nft و فناوری بلاکچین را تقویت کنید",
      img: "img/value_logo.png",
    },
    {
      id: 2,
      title: "ماموریت",
      desc: "تبدیل به قدرتمند پلتفرم برای توسعه دهندگان حوزه خود شوید",
      img: "img/vision_logo.png",
    },
    {
      id: 3,
      title: "ارزش ها",
      desc: "نواوری و ازادی سازندگان",
      img: "img/mission_logo.png",
    },
  ];
  const visionsData = [
    {
      id: 1,
      title: "Q-2021",
      item: [
        "صفحه وبلاگ",
        "آدرس فیزیکی حمل و نقل",
        "تم های متنی بر دسته بندی",
        "کد های تخفیف",
        "پرداخت فیات",
        "آپلود انبوه",
        "باکس اشتراک",
        "بازاریابی ایمیل",
      ],
      condition: true,
    },
    {
      id: 2,
      title: "Q-2022",
      item: ["کد های تخفیف", "پرداخت فیات", "باکس اشتراک", "بازاریابی ایمیل"],
      condition: true,
    },
    {
      id: 3,
      title: "Q-2023",
      item: [
        "صفحه وبلاگ",
        "آدرس فیزیکی حمل و نقل",
        "تم های متنی بر دسته بندی",
        "کد های تخفیف",
        "پرداخت فیات",
        "آپلود انبوه",
        "باکس اشتراک",
      ],
      condition: true,
    },
    {
      id: 4,
      title: "Q-2024",
      item: ["آپلود انبوه", "باکس اشتراک", "بازاریابی ایمیل"],
      condition: false,
    },
  ];
  const supportersData = [
    {
      id: 1,
      jobTitle: "CEO & Co-Founder",
      supName: "Olivia Gable",
      img: "img/screen-0.jpg",
    },
    {
      id: 2,
      jobTitle: "CTO & Co-Founder",
      supName: "Emma Watson",
      img: "img/images.jpeg",
    },
    {
      id: 3,
      jobTitle: "Project Manager",
      supName: "Mateo Deloofes",
      img: "img/main-qimg.jpeg",
    },
    {
      id: 4,
      jobTitle: "Fullstack Lead",
      supName: "Levi Makfa",
      img: "img/unnamed (1).jpg",
    },
    {
      id: 5,
      jobTitle: "Business Analyst Lead",
      supName: "Henry Manning",
      img: "img/images (1).jpeg",
    },
    {
      id: 6,
      jobTitle: "UI/UX Lead",
      supName: "Eren Yeager",
      img: "img/unnamed.jpg",
    },
  ];
  return (
    <>
      <Header />
      {/* S1 */}
      <section
        id="our_story"
        className="d-flex flex-column position-relative flex-md-row gap-3  py-5 container"
      >
        <h2 className="fs-1 fw-bold text-light col-md-4 text-center col-12">
          داستان ما
        </h2>

        <div className="d-flex flex-column gap-3 col-md-8 col-12 align-items-center justify-content-center ">
          <p className="fs-3 textColor-section1 fw-bold">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
          <div className="text-light fw-light">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و بزارهای کاربردی می باشد
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
            </p>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکهد ابزارهای کاربردی
              می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده
            </p>
          </div>
        </div>
      </section>
      {/* S2 */}
      <section
        id="visions"
        className="text-light margin_section  container d-flex flex-column flex-md-row"
      >
        <h2 className="fw-bold col-12 col-md-4 text-center">
          چشم انداز ها و ارزش ها
        </h2>
        <div className="d-flex flex-md-row gap-3 mt-3 flex-column col-md-8 col-12 justify-content-center align-items-center justify-content-lg-between">
          {targetsData.map((data) => (
            <TargetCards key={data.id} {...data} />
          ))}
        </div>
      </section>
      {/* S3 */}
      <section
        id="roadMap"
        className="container d-flex mb-5 position-relative flex-column flex-xl-row position_xl_relative justify-content-center align-items-center text-light px-5"
      >
        <div className="col-12 col-xl-3 mb-5 position_xl_absolute text-center">
          <h2 className="fw-bold fs-1 ">نقشه راه</h2>
          <p className="fw-light">چیزی که ما روی آن کار کرده ایم</p>
        </div>

        <div className="col-12 col-xl-7 d-md-flex flex-xl-column justify-content-center align-items-center gap-3 gap-lg-0 flex-md-wrap ">
          {visionsData.map((data) => (
            <VisionsCard key={data.id} {...data} />
          ))}
        </div>
        <div className="col-12 col-xl-2 d-flex justify-content-center align-items-center">
          <img
            src="img/mission_circle.svg"
            className="animated_spin col-12"
            alt=""
            style={{ width: "15rem" }}
          />
        </div>
      </section>
      {/* S4 */}
      <section
        id="supporters"
        className="d-flex  flex-column justify-content-center align-items-center flex-wrap gap-3 text-light container  mt-5"
      >
        <h2 className="fw-bold h2 mb-5"> افراد حامی ما </h2>
        <div className="col-12 d-flex  justify-content-center align-items-center flex-wrap gap-5 ">
        {supportersData.map(data => <SupportersCard key={data.id} {...data} />)}
        </div>
      </section>
    </>
  );
};

export default AboutNftPage;
