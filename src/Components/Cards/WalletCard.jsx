import React from "react";

const WalletCard = ({ id, walletName, walletImage }) => {

  return (
    <div className="col-6 col-sm-4 col-xl-2">
      <div className={`wallet_box  rounded  wallet_box_${id} position-relative`}>
        <div className="rounded h-100 d-flex flex-column align-items-center justify-content-center">
          <div>
            <img src={walletImage} alt="" />
          </div>
          <div>
            <span className="text-secondary fs-4 mt-4 d-block">{walletName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;
