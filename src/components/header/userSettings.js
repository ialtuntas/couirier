import { Dropdown, List, Avatar, Image } from "antd";
import avataradres from "../../svg/avatar.svg";
import bottomarrow from "../../svg/bottomarrow.svg";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const menu = (
  <List
    style={{
      padding: "10px 30px 0px 20px",
      width: "300px",
      borderRadius: "10px",
      height: "150px",
      overflowX: "auto",
    }}
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);

const userSettings = () => {
  return (
    <>
      <Dropdown overlay={menu} placement="bottomRight">
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
