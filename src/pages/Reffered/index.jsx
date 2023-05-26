import './referred.css'
import { referredData } from '../../constants/referredData';
import {Nav, Frame, ReferralCode, Amount} from '../../components';
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
function Referred() {
    
    const {
        uiUxReferEarnFriendsReferred,
        spanText1,
        spanText2,
        dhirajSaxsena,
        coursesEnrolled6,
        address1,
        uiUx1,
        photoshop1,
        illustrator1,
        python1,
        place1,
        java1,
        subhashMishra,
        coursesEnrolled231,
        address2,
        uiUx2,
        python2,
        photoshop2,
        illustrator2,
        place2,
        java2,
        c1,
        afterEffects1,
        reactNative1,
        dsa1,
        competitiveProgramming1,
        dataScience1,
        premierePro1,
        photography1,
        singing1,
        guitar1,
        digitalMarketing1,
        financialModelling1,
        webDevelopmentWithPhpSql1,
        appDevelopment1,
        prafullKumar,
        coursesEnrolled232,
        address3,
        uiUx3,
        python3,
        photoshop3,
        illustrator3,
        place3,
        java3,
        c2,
        afterEffects2,
        reactNative2,
        dsa2,
        competitiveProgramming2,
        dataScience2,
        premierePro2,
        photography2,
        singing2,
        guitar2,
        digitalMarketing2,
        financialModelling2,
        webDevelopmentWithPhpSql2,
        appDevelopment2,
        termsConditions,
        navProps,
    } = referredData;

  return (
    <div className="container-center-horizontal">
      <div className="refer-earn-desktop screen">
        <header className="header">
          <div className="nav-bar">
            <div className="hero-image">
            <Link to="/"><div className="logo" style={{backgroundImage: `url(${logo})`}}></div>
              </Link><Nav
              myAssignment={navProps.myAssignment}
              chatWithMentor={navProps.chatWithMentor}
              profilename={navProps.profilename}
              />
            </div>
          </div>
        </header>
        <div className="frame-304"></div>
        <p className="uiux-refer-earn-friends-referred poppins-normal-black-14px">
          {uiUxReferEarnFriendsReferred}
        </p>
        <div className="flex-row-3">
          <ReferralCode />
          <div className="dashboard">
            <Frame />
          </div>
        </div>
        <div className="how-does-it-work">
          <div className="friends-who-enrolled3">
            <span className="span0">{spanText1}</span>
            <span className="span1">{spanText2}</span>
          </div>
        </div>
        <div className="overlap-group">
          <div className="scrollable">
            <div className="referral-cards">
              <div className="frame-28">
                <div className="flex-col-4">
                  <div className="flex-row-4">
                    <div className="flex-col-5">
                      <div className="dhiraj-saxsena poppins-bold-white-16px">
                        {dhirajSaxsena}
                      </div>
                      <div className="courses-enrolled poppins-medium-white-14px">
                        {coursesEnrolled6}
                      </div>
                    </div>
                    <div className="address-1 poppins-normal-white-14px">
                      {address1}
                    </div>
                  </div>
                  <div className="frame-container-7">
                    <div className="frame-2">
                      <div className="uiux poppins-normal-white-14px">
                        {uiUx1}
                      </div>
                    </div>
                    <div className="frame-2">
                      <div className="photoshop poppins-normal-white-14px">
                        {photoshop1}
                      </div>
                    </div>
                    <div className="frame-2-1">
                      <div className="illustrator poppins-normal-white-14px">
                        {illustrator1}
                      </div>
                    </div>
                  </div>
                  <div className="frame-container-8">
                    <div className="frame-2-1">
                      <div className="python poppins-normal-white-14px">
                        {python1}
                      </div>
                    </div>
                    <div className="frame-2-1">
                      <div className="place poppins-normal-white-14px">
                        {place1}
                      </div>
                    </div>
                    <div className="frame-2-1">
                      <div className="java poppins-normal-white-14px">
                        {java1}
                      </div>
                    </div>
                  </div>
                  <Amount amount="185" />
                </div>
              </div>
              <div className="frame-28">
                <div className="flex-col">
                  <div className="flex-row">
                    <div className="flex-col-1">
                      <div className="subhash-mishra poppins-bold-white-16px">
                        {subhashMishra}
                      </div>
                      <div className="courses-enrolled poppins-medium-white-14px">
                        {coursesEnrolled231}
                      </div>
                    </div>
                    <div className="address poppins-normal-white-14px">
                      {address2}
                    </div>
                  </div>
                  <div className="flex-row-1">
                    <div className="scrollable-frame">
                      <div className="all-courses">
                        <div className="flex-row-2">
                          <div className="frame-container">
                            <div className="frame-2-1">
                              <div className="uiux-1 poppins-normal-white-14px">
                                {uiUx2}
                              </div>
                            </div>
                            <div className="frame-2-1">
                              <div className="python-1 poppins-normal-white-14px">
                                {python2}
                              </div>
                            </div>
                          </div>
                          <div className="flex-col-2">
                            <div className="frame-container-1">
                              <div className="frame-2-1">
                                <div className="photoshop-1 poppins-normal-white-14px">
                                  {photoshop2}
                                </div>
                              </div>
                              <div className="frame-2-1">
                                <div className="illustrator-1 poppins-normal-white-14px">
                                  {illustrator2}
                                </div>
                              </div>
                            </div>
                            <div className="frame-container-2">
                              <div className="frame-2-1">
                                <div className="place-1 poppins-normal-white-14px">
                                  {place2}
                                </div>
                              </div>
                              <div className="frame-288">
                                <div className="java-1 poppins-normal-white-14px">
                                  {java2}
                                </div>
                              </div>
                              <div className="frame-289">
                                <div className="c poppins-normal-white-14px">
                                  {c1}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-col-3">
                          <div className="frame-container-3">
                            <div className="frame-2">
                              <div className="after-effects poppins-normal-white-14px">
                                {afterEffects1}
                              </div>
                            </div>
                            <div className="frame-2-1">
                              <div className="react-native poppins-normal-white-14px">
                                {reactNative1}
                              </div>
                            </div>
                          </div>
                          <div className="frame-container-4">
                            <div className="frame-2-1">
                              <div className="dsa poppins-normal-white-14px">
                                {dsa1}
                              </div>
                            </div>
                            <div className="frame-2-1">
                              <div className="competitive-programming poppins-normal-white-14px">
                                {competitiveProgramming1}
                              </div>
                            </div>
                          </div>
                          <div className="frame-container-5">
                            <div className="frame">
                              <div className="data-science poppins-normal-storm-dust-14px">
                                {dataScience1}
                              </div>
                            </div>
                            <div className="frame">
                              <div className="premiere-pro poppins-normal-storm-dust-14px">
                                {premierePro1}
                              </div>
                            </div>
                          </div>
                          <div className="frame-container-6">
                            <div className="frame">
                              <div className="photography poppins-normal-storm-dust-14px">
                                {photography1}
                              </div>
                            </div>
                            <div className="frame">
                              <div className="singing poppins-normal-storm-dust-14px">
                                {singing1}
                              </div>
                            </div>
                            <div className="frame">
                              <div className="guitar poppins-normal-storm-dust-14px">
                                {guitar1}
                              </div>
                            </div>
                          </div>
                          <div className="frame">
                            <div className="digital-marketing poppins-normal-storm-dust-14px">
                              {digitalMarketing1}
                            </div>
                          </div>
                          <div className="frame-30">
                            <div className="financial-modelling poppins-normal-storm-dust-14px">
                              {financialModelling1}
                            </div>
                          </div>
                          <div className="frame">
                            <div className="web-development-with-phpsql poppins-normal-storm-dust-14px">
                              {webDevelopmentWithPhpSql1}
                            </div>
                          </div>
                          <div className="frame-30">
                            <div className="app-development poppins-normal-storm-dust-14px">
                              {appDevelopment1}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-468"></div>
                  </div>
                  <Amount amount="485" />
                </div>
              </div>
              <div className="frame-28">
                <div className="flex-col">
                  <div className="flex-row">
                    <div className="flex-col-1">
                      <div className="prafull-kumar poppins-bold-white-16px">
                        {prafullKumar}
                      </div>
                      <div className="courses-enrolled poppins-medium-white-14px">
                        {coursesEnrolled232}
                      </div>
                    </div>
                    <div className="address poppins-normal-white-14px">
                      {address3}
                    </div>
                  </div>
                  <div className="flex-row-1">
                    <div className="scrollable-frame">
                      <div className="all-courses">
                        <div className="flex-row-2">
                          <div className="frame-container">
                            <div className="frame-2-1">
                              <div className="uiux-2 poppins-normal-white-14px">
                                {uiUx3}
                              </div>
                            </div>
                            <div className="frame-2-1">
                              <div className="python-2 poppins-normal-white-14px">
                                {python3}
                              </div>
                            </div>
                          </div>
                          <div className="flex-col-2">
                            <div className="frame-container-1">
                              <div className="frame-2-1">
                                <div className="photoshop-2 poppins-normal-white-14px">
                                  {photoshop3}
                                </div>
                              </div>
                              <div className="frame-2-1">
                                <div className="illustrator-2 poppins-normal-white-14px">
                                  {illustrator3}
                                </div>
                              </div>
                            </div>
                            <div className="frame-container-2">
                              <div className="frame-2-1">
                                <div className="place-2 poppins-normal-white-14px">
                                  {place3}
                                </div>
                              </div>
                              <div className="frame-288">
                                <div className="java-2 poppins-normal-white-14px">
                                  {java3}
                                </div>
                              </div>
                              <div className="frame-289">
                                <div className="c-1 poppins-normal-white-14px">
                                  {c2}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-col-3">
                          <div className="frame-container-3">
                            <div className="frame">
                              <div className="after-effects-1 poppins-normal-storm-dust-14px">
                                {afterEffects2}
                              </div>
                            </div>
                            <div className="frame">
                              <div className="react-native-1 poppins-normal-storm-dust-14px">
                                {reactNative2}
                              </div>
                            </div>
                          </div>
                          <div className="frame-container-4">
                            <div className="frame">
                              <div className="dsa-1 poppins-normal-storm-dust-14px">
                                {dsa2}
                              </div>
                            </div>
                            <div className="frame">
                              <div className="competitive-programming-1 poppins-normal-storm-dust-14px">
                                {competitiveProgramming2}
                              </div>
                            </div>
                          </div>
                          <div className="frame-container-5">
                            <div className="frame">
                              <div className="data-science-1 poppins-normal-storm-dust-14px">
                                {dataScience2}
                              </div>
                            </div>
                            <div className="frame">
                              <div className="premiere-pro-1 poppins-normal-storm-dust-14px">
                                {premierePro2}
                              </div>
                            </div>
                          </div>
                          <div className="frame-container-6">
                            <div className="frame">
                              <div className="photography-1 poppins-normal-storm-dust-14px">
                                {photography2}
                              </div>
                            </div>
                            <div className="frame">
                              <div className="singing-1 poppins-normal-storm-dust-14px">
                                {singing2}
                              </div>
                            </div>
                            <div className="frame">
                              <div className="guitar-1 poppins-normal-storm-dust-14px">
                                {guitar2}
                              </div>
                            </div>
                          </div>
                          <div className="frame">
                            <div className="digital-marketing-1 poppins-normal-storm-dust-14px">
                              {digitalMarketing2}
                            </div>
                          </div>
                          <div className="frame-30">
                            <div className="financial-modelling-1 poppins-normal-storm-dust-14px">
                              {financialModelling2}
                            </div>
                          </div>
                          <div className="frame">
                            <div className="web-development-with-phpsql-1 poppins-normal-storm-dust-14px">
                              {webDevelopmentWithPhpSql2}
                            </div>
                          </div>
                          <div className="frame-30">
                            <div className="app-development-1 poppins-normal-storm-dust-14px">
                              {appDevelopment2}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="rectangle-468"></div>
                  </div>
                  <Amount amount="485" />
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-469"></div>
        </div>
        <div className="terms-conditions poppins-medium-cardinal-pink-16px">
          {termsConditions}
        </div>
      </div>
    </div>
  );
}

export default Referred;