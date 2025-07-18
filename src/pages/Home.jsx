import React, { useEffect, useState } from "react";
import axios from "axios";
import FilterBar from "../components/FilterBar";

const Home = ({ searchedresults }) => {
  const [itemList, setItemlist] = useState([]);
  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    console.log(res.data);
    console.log("Data received");
    setItemlist(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <FilterBar
        itemList={searchedresults.length ? searchedresults : itemList}
      />
    </div>
  );
};

export default Home;
