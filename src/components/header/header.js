import Logo from "../../svg/logo.svg";
import LogoSmall from "../../svg/logosmall.svg";
import Notfy from "./notfy";
import UserSettings from "./userSettings";
import LangChanger from "./langChanger";
import { useTranslation } from "react-i18next";

function Header() {
  const [t, i18n] = useTranslation("common");

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
            <a href="#">{t("welcome.home")}</a>
          </li>
          <li>
            <a href="#">{t("Müşteri İşlemleri")}</a>
          </li>
          <li>
            <a href="#">{t("Şube İşlemleri")}</a>
          </li>
          <li>
            <a href="#">{t("Kargo İşlemleri")}</a>
          </li>
        </ul>
      </div>
      <div className="usertools">
        <LangChanger />
        <div className="notfy">
          <Notfy></Notfy>
        </div>
        <UserSettings></UserSettings>
      </div>
    </div>
  );
}

export default Header;
