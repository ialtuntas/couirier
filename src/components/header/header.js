import Logo from "../../svg/logo.svg";
import LogoSmall from "../../svg/logosmall.svg";
import Notfy from "./notfy";
import UserSettings from "./userSettings";
import LangChanger from "./langChanger";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="logosmall">
        <img src={LogoSmall} />
      </div>
      <div className="list">
        <ul>
          <li className="active">
            <a href="#">Ana Sayfa</a>
          </li>
          <li>
            <a href="#">Müşteri İşlemleri</a>
          </li>
          <li>
            <a href="#">Şube İşlemleri</a>
          </li>
          <li>
            <a href="#">Kargo İşlemleri</a>
          </li>
        </ul>
      </div>
      <div className="usertools">
        <div className="flag">
          <LangChanger />
        </div>
        <div className="notfy">
          <Notfy></Notfy>
        </div>
        <UserSettings></UserSettings>
      </div>
    </div>
  );
}

export default Header;
