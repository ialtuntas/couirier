import { Avatar, Badge, Dropdown, List } from "antd";
import React from "react";
import bell from "../../svg/bell.svg";

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
const notfy = () => {
  return (
    <Badge offset={[-2, 1]} dot>
      <Dropdown overlay={menu} placement="bottomCenter">
        <img src={bell} alt="bell" />
      </Dropdown>
    </Badge>
  );
};

export default notfy;
