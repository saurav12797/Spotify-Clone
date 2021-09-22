import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";
import "./Sidebar.css";

function MyPlaylist(props: any) {
  const { itemList, UpdateItemList } = props;

  function handleClick(e: any) {
    if (e.type === "contextmenu") {
      console.log("right click");
      e.preventDefault();
    }
  }

  const deleteItem = (key: any) => {
    const newList = itemList.filter((itemObj: any) => {
      return (
        itemObj !== key
      ); /* return all elements except the key match element */
    });
    UpdateItemList(newList);
  };

  return (
    <>
      <div>
        <br />

        {itemList.map((itemObj: any) => {
          const menu = (
            <Menu className="menumain">
              <Menu.Item className="mymenu" key="1">
                <button className="rightclickBtn">Rename</button>
              </Menu.Item>
              <Menu.Item className="mymenu" key="2">
                <button
                  className="rightclickBtn"
                  onClick={() => {
                    console.log("delete is pressed");
                    deleteItem(itemObj.key);
                  }}
                >
                  Delete
                </button>
              </Menu.Item>
            </Menu>
          );
          return (
            <>
              <Link
                className="newplaylist "
                onContextMenu={handleClick}
                to={`/PlaylistDetails/${itemObj.key}`}
              >
                {itemObj.item}
                <br />
                <Dropdown overlay={menu} trigger={["contextMenu"]}>
                  <div
                    className="site-dropdown-context-menu"
                    style={{
                      textAlign: "center",
                      height: 20,
                      lineHeight: "10px",
                    }}
                  ></div>
                </Dropdown>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default MyPlaylist;
