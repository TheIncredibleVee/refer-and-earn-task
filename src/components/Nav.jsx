function Nav(props) {
    const { myAssignment, chatWithMentor, profilename } = props;
  
    return (
      <div className="nav poppins-medium-cardinal-pink-18px">
        <div className="ment">
          {myAssignment}
        </div>
        <div className="ment">
          {chatWithMentor}
        </div>
        <div className="profile-name">
          <img className="profile-name-item" src="./src/assets/account-circle.svg" alt="Account circle" />
          <div className="profile-name-1">
            {profilename}
          </div>
          <img className="profile-name-item" src="./src/assets/keyboard-arrow-down.svg" alt="Keyboard arrow down" />
        </div>
      </div>
    );
  }

  export default Nav;