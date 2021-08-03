import sidebarsvg from "../svg/sidebar.svg";
import { Button, Card, Drawer, Input, List, Typography } from "antd";
import { useState } from "react";
import Logo from "../svg/logo.svg";

const Sidebar = () => {
  const [visible2, setVisible2] = useState(false);

  const showDrawer2 = () => {
    setVisible2(true);
    setVisible(false);
  };

  const onClose2 = () => {
    setVisible2(false);
  };
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
    setVisible2(false);
  };

  const onClose = () => {
    setVisible(false);
  };
  const data = [
    "Çağrı Sevgi",
    "Çağrı Sevgi",
    "Çağrı Sevgi",
    "Çağrı Sevgi",
    "Çağrı Sevgi",
  ];
  return (
    <div className="sidebar">
      <img
        style={{
          transition: "all .3s",
          marginTop: "-18px",
          marginLeft: visible ? "245px" : "-13px",
        }}
        onClick={visible ? onClose : showDrawer}
        src={sidebarsvg}
      />

      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        visible={visible}
        getContainer={false}
        style={{
          position: "absolute",
          zIndex: 100000,
        }}
        width={258}
        bodyStyle={{ padding: 0, background: "#fff" }}
        mask={false}
      >
        <div className="logo">
          <img src={Logo} />
        </div>

        <div class="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15.02"
            height="15.001"
            viewBox="0 0 15.02 15.001"
          >
            <g id="Search" transform="translate(0.755 0.75)" opacity="0.5">
              <path
                id="Vector"
                d="M5.4,0a5.4,5.4,0,1,0,3.82,1.581A5.406,5.406,0,0,0,5.4,0Z"
                fill="none"
                stroke="#061624"
                stroke-width="1.5"
              />
              <path
                id="Vector-2"
                data-name="Vector"
                d="M0,0,3.773,3.769"
                transform="translate(9.432 9.422)"
                fill="none"
                stroke="#061624"
                stroke-linecap="round"
                stroke-width="1.5"
              />
            </g>
          </svg>

          <Input placeholder="Search" />
        </div>

        <List
          header={
            <Typography.Text
              style={{
                color: "#025FBF",
                fontSize: "12px",
                display: "block",
                textAlign: "center",
              }}
            >
              Courier Name
            </Typography.Text>
          }
          //   footer={<div>Footer</div>}
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              style={{
                width: "258px",
                // paddingLeft: "12px",
                justifyContent: "center",
                fontSize: "14px",
              }}
            >
              {/* <Typography.Text
                style={{
                  textAlign: "left",
                  color: "#061624",
                  opacity: ".7",
                }}
              >
                1
              </Typography.Text> */}

              <Typography.Text
                style={{
                  color: "#061624",
                  opacity: ".7",
                }}
              >
                {item}
              </Typography.Text>
            </List.Item>
          )}
        />
      </Drawer>
    </div>
  );
};

export default Sidebar;
