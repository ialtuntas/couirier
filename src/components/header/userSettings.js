import { Dropdown, List, Avatar } from "antd";
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
      width: "350px",
      borderRadius: "10px",
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
      <img src={avataradres} className="borderavatar" alt="logo" />

      {/* <Avatar
          shape="square"
          size={34}
          src={
            <Image width={34} height={34} src="https://panel.poshta.ua/uploads/avatars/system-user/8f62a8fb648412ab8fe498d7ced5f48b.jpeg" />
          }
        /> */}
      <span>Carter Center</span>

      <Dropdown overlay={menu} placement="bottomRight">
        <img src={bottomarrow} className="bottomarrow" alt="logo" />
      </Dropdown>
    </>
  );
};

export default userSettings;
