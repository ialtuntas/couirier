import uk from "../../svg/uk.svg";
import bottomarrow from "../../svg/bottomarrow.svg";
import { Dropdown, Menu } from "antd";
import { useTranslation } from "react-i18next";

const LangChanger = () => {
  const [t, i18n] = useTranslation("common");
  const menu = (
    <Menu
      style={{
        padding: "5px",
        borderRadius: "10px",
      }}
    >
      <Menu.Item onClick={() => i18n.changeLanguage("tr")}>
        <img src={uk} className="App-logo" alt="logo" /> Turkish
      </Menu.Item>
      <Menu.Item onClick={() => i18n.changeLanguage("uk")}>
        <img src={uk} className="App-logo" alt="logo" /> Ukrainian
      </Menu.Item>
      <Menu.Item onClick={() => i18n.changeLanguage("ru")}>
        <img src={uk} className="App-logo" alt="logo" /> Russian
      </Menu.Item>
      <Menu.Item onClick={() => i18n.changeLanguage("en")}>
        <img src={uk} className="App-logo" alt="logo" /> English (US)
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Dropdown
        overlayStyle={{
          zIndex: 100000000,
        }}
        overlay={menu}
        placement="bottomCenter"
      >
        <div className="flag">
          <img src={uk} className="App-logo" alt="logo" />
          <img src={bottomarrow} className="App-logo" alt="logo" />
        </div>
      </Dropdown>
    </>
  );
};

export default LangChanger;
