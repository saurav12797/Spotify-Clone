import { AutoComplete, Button, Input } from "antd";
import { SearchOutlined, CaretDownOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import "./searchProduct.scss";

interface SearchProductProps {}

const SearchProduct: FC<SearchProductProps> = (props) => {
  const {} = props;

  const renderTitle = (title: string) => (
    <span>
      {title}
      <a
        style={{ float: "right" }}
        href="https://www.google.com/search?q=antd"
        target="_blank"
        rel="noopener noreferrer"
      >
        more
      </a>
    </span>
  );

  const renderItem = (title: string, count: number) => ({
    value: title,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {title}
      </div>
    ),
  });

  const options = [
    {
      label: renderTitle("Libraries"),
      options: [
        renderItem("AntDesign", 10000),
        renderItem("AntDesign UI", 10600),
      ],
    },
    {
      label: renderTitle("Solutions"),
      options: [
        renderItem("AntDesign UI FAQ", 60100),
        renderItem("AntDesign FAQ", 30010),
      ],
    },
    {
      label: renderTitle("Articles"),
      options: [renderItem("AntDesign design language", 100000)],
    },
  ];

  return (
    <div className="search-product">
      <div className="location">
        {" "}
        <i className="icon-location-top" /> Chennai <CaretDownOutlined className="care-down" />
      </div>
      <AutoComplete
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{ width: 250 }}
        options={options}
      >
        <Input placeholder="Search your Needs" />
      </AutoComplete>
      <div className="btn">
        <SearchOutlined />
      </div>
    </div>
  );
};

export default SearchProduct;
