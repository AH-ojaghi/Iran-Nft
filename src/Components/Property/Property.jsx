import React from "react";
import "./Property.css";
import PropertyCard from "../Cards/PropertyCard";
function Property() {
  const propertyData = [
    {
      id: 1,
      img: "img/speed.svg",
      title: "سرعت",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
    {
      id: 2,
      img: "img/Support.svg",
      title: "پشتیبانی",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
    {
      id: 3,
      img: "img/security.svg",
      title: "امنیت",
      caption:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
    },
  ];
  return (
    <div className="container-fluid container-xl  section_property">
      <div className="row row-gap-5">
        {propertyData.map((data) => (
          <PropertyCard {...data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Property;
