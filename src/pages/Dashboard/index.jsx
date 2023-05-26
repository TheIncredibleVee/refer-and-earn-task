import {appData} from '../../constants/data';
import './dashboard.css';
import {Nav, Data, WithdrawBalance} from '../../components';
import {Link} from 'react-router-dom';
import box from '../../assets/bxs-offer-2.svg'
import group from '../../assets/groups-2.svg'
import account from '../../assets/account-balance-wallet-2.svg'
import offer from '../../assets/local-offer-2.svg'

function Dashboard() {
  const {
    logo,
    uiUxReferEarn,
    referralEarning,
    text1,
    totalReferrals,
    number,
    walletBalance,
    text2,
    yourReferralCode,
    edch54,
    howDoesItWork,
    inviteYourFriends,
    shareTheLinkTuted,
    friendPurchasesAnyCourse,
    usingYourReferral,
    text3,
    friendsWhoEnrolled,
    termsConditions,
    navProps,
    withdrawBalanceProps,
    data1Props,
    data2Props,
    data3Props,
  } = appData;

  return (
    <div className="container-center-horizontal">
      <div className="refer-earn-desktop screen">
        <header className="header">
          <div className="nav-bar">
            <div className="hero-image">
              <Link to="/"><div className="logo" style={{backgroundImage: `url(${logo})`}}></div>
              </Link>
              <Nav
              myAssignment={navProps.myAssignment}
              chatWithMentor={navProps.chatWithMentor}
              profilename={navProps.profilename}
              />
            </div>
          </div>
        </header>
        <div className="frame-304"></div>
        <p className="uiux-refer-earn poppins-normal-black-14px">
          {uiUxReferEarn}
        </p>
        <div className="flex-row-dash">
          <div className="dashboard-dash">
            <div className="frame-container-dash">
              <div className="frame-a">
                <div className="referral-earning poppins-normal-cardinal-pink-14px">
                  {referralEarning}
                </div>
                <h1 className="text-1 poppins-medium-black-32px">
                  {text1}
                </h1>
              </div>
              <div className="frame-b">
                <div className="total-referrals poppins-normal-cardinal-pink-14px">
                  {totalReferrals}
                </div>
                <div className="number poppins-medium-black-32px">
                  {number}
                </div>
              </div>
              <div className="frame-c">
                <div className="wallet-balance poppins-normal-cardinal-pink-14px">
                  {walletBalance}
                </div>
                <div className="text-2 poppins-medium-black-32px">
                  {text2}
                </div>
              </div>
            </div>
            <WithdrawBalance>{withdrawBalanceProps.children}</WithdrawBalance>
          </div>
          <div className="your-referral-code-dash">
            <div className="your-referral-code-1-dash poppins-semi-bold-cardinal-pink-24px">
              {yourReferralCode}
            </div>
            <div className="frame-ref">
              <div className="edch54-dash">
                {edch54}
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group-dash">
          <div className="how-does-it-work-dash">
            <div className="flex-col-dash">
              <p className="how-does-it-work-1-dash poppins-semi-bold-cardinal-pink-24px">
                {howDoesItWork}
              </p>
              <div className="data">
                <div className="ellipse-132"></div>
                <div className="content">
                  <div className="invite-your-friends poppins-medium-black-16px">
                    {inviteYourFriends}
                  </div>
                  <p className="share-the-link-tuted poppins-normal-gravel-16px">
                    {shareTheLinkTuted}
                  </p>
                </div>
              </div>
              <Data
              youGet200AsReferralMoney={data1Props.youGet200AsReferralMoney}
              onTotalPurchaseTh={data1Props.onTotalPurchaseTh}
              />
              <Data
              youGet200AsReferralMoney={data2Props.youGet200AsReferralMoney}
              onTotalPurchaseTh={data2Props.onTotalPurchaseTh}
              className={data2Props.className}
              />
            </div>
            <div className="data-container-dash">
              <div className="data-1">
                <div className="ellipse-132"></div>
                <div className="content-1">
                  <div className="friend-purchases-any-course poppins-medium-black-16px">
                    {friendPurchasesAnyCourse}
                  </div>
                  <p className="using-your-referral poppins-normal-gravel-16px">
                    {usingYourReferral}
                  </p>
                </div>
              </div>
              <Data
              youGet200AsReferralMoney={data3Props.youGet200AsReferralMoney}
              onTotalPurchaseTh={data3Props.onTotalPurchaseTh}
              className={data3Props.className}
              />
            </div>
          </div>
          <img className="bxsoffer" src={box} alt="bxs:offer" />
          <img className="groups" src={group} alt="Groups" />
          <img className="account-balance-wallet" src={account} alt="Account balance wallet" />
          <img className="local-offer" src={offer}alt="Local offer" />
          <div className="text-3">
            {text3}
          </div>
        </div>
        <Link to="/referred">
          <div className="friends-who-enrolled poppins-medium-cardinal-pink-16px">
            {friendsWhoEnrolled}
          </div>
        </Link>
        <div className="terms-conditions poppins-medium-cardinal-pink-16px">
          {termsConditions}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;








