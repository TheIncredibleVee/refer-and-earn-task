function Data(props) {
    const { youGet200AsReferralMoney, onTotalPurchaseTh, className } = props;
  
    return (
      <div className={`data-2-1 ${className || ""}`}>
        <div className="ellipse-132-1"></div>
        <div className="content-2">
          <p className="you-get-200-as-referral-money poppins-medium-black-16px">
            {youGet200AsReferralMoney}
          </p>
          <p className="on-total-purchase-th poppins-normal-gravel-16px">
            {onTotalPurchaseTh}
          </p>
        </div>
      </div>
    );
  }
  export default Data;