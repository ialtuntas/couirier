import { Dropdown, List, Avatar, Image, Menu } from "antd";
import avataradres from "../../svg/avatar.svg";
import bottomarrow from "../../svg/bottomarrow.svg";

const menu = (
  <Menu
    style={{
      padding: "5px",
      borderRadius: "10px",
    }}
  >
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>a danger item</Menu.Item>
  </Menu>
);

const userSettings = () => {
  return (
    <>
      <Dropdown
        overlayStyle={{
          zIndex: 100000000,
        }}
        overlay={menu}
        placement="bottomRight"
      >
        <div>
          <div className="usersettingsmobile">
            <img src={avataradres} className="borderavatar" alt="logo" />
          </div>

          <div className="usersettings">
            <img src={avataradres} className="borderavatar" alt="logo" />
            <span>Carter Center</span>
            <img src={bottomarrow} className="bottomarrow" alt="logo" />
          </div>
        </div>
      </Dropdown>
    </>
  );
};

export default userSettings;
