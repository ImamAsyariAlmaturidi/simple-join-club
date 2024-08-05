import React from "react";
import ClubsCard from "../components/ClubsCard";
import axios from "axios";
import { useState, useEffect } from "react";
const MyClubs = () => {
  const [data, setData] = useState([])
  async function getData() {
    try {
      const { data } = await axios.get("https://api.p2.lc2s5.foxhub.space/myclubs", {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`
        }
      });
      setData(data)
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    getData()
  }, [data])
  return (
    <div>
      <ClubsCard data={data} />
    </div>
  );
};

export default MyClubs;
