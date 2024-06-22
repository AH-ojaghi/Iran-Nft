import React from "react";
//
import Header from "../Components/Header/HomePageHeader/Header";
import Wallet from "../Components/Wallet/Wallet";
import HotBids from "../Components/HotBids/HotBids";
import Property from "../Components/Property/Property";
import Trends from "../Components/Trends/Trends";
import TopCreators from "../Components/TopCreators/TopCreators";
import NewsLetters from "../Components/NewsLetters/NewsLetters";
function HomePage() {
  return (
    <>
      <Header />
      <Wallet />
      <HotBids />
      <Property />
      <Trends />
      <TopCreators />
      <NewsLetters />
    </>
  );
}

export default HomePage;
