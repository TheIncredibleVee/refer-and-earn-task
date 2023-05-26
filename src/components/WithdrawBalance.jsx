function WithdrawBalance(props) {
    const { children } = props;
  
    return (
      <div className="withdraw-balance">
        <div className="withdraw-balance-1">
          {children}
        </div>
      </div>
    );
}
export default WithdrawBalance;