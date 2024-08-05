import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../components/Card";
const Home = () => {
  const [data, setData] = useState([]);

  async function getData() {
    console.log(localStorage.access_token);
    try {
      const { data } = await axios.get(
        "https://api.p2.lc2s5.foxhub.space/clubs",
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      setData(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
        <div >
            <Card data={data}/>
        </div>
    </>
  );
};

export default Home;
