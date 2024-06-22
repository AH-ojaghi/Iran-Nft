import React from "react";
import "./Wallet.css";
//
// import WalletCard from "../Components/Cards/WalletCard"
import WalletCard from "../Cards/WalletCard.jsx";
function Wallet() {
  const walletData = [
    { id: 2, walletName: "Coinbase", walletImage: "img/pngaaa 1.png" },
    { id: 3, walletName: "Exodus", walletImage: "img/image 1.png" },
    { id: 4, walletName: "Uniswap", walletImage: "img/uniswap-coinuni.png" },
    { id: 5, walletName: "Binance", walletImage: "img/Group 25.png" },
    { id: 6, walletName: "Meta Mask", walletImage: "img/Group 19.png" },
  ];
  return (
    <div className="container-fluid container-xl mt-5">
      <div className="header_container_title mb-5 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-3">
          <div className="d-flex align-items-center justify-content-center bg_gradient_main_site rounded-circle icon_header_container">
            <img src="img/wallet2.png" alt="" />
          </div>
          <div className="text-light">
            <h5 className="fs-3 fw-medium">کیف پــول</h5>
            <span className="fs-4 fw-light">Wallet</span>
          </div>
        </div>

       
      </div>
      <div className="row row-gap-3">
        {walletData.map((data) => (
          <WalletCard {...data} key={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Wallet;
