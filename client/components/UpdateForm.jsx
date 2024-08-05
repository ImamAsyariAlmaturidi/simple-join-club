import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Toastify from "toastify-js";
import { useNavigate } from "react-router-dom";
const UpdateForm = () => {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dataById, setDataById] = useState({});

  const { clubId, myClubId } = useParams();
  async function getDataById() {
    try {
      const { data } = await axios.get(
        `https://api.p2.lc2s5.foxhub.space/clubs/${myClubId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      setDataById(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function update(e) {
    e.preventDefault();
    try {
      const body = {
        imageUrl,
        title,
        description,
      };
      const response = await axios.put(
        `https://api.p2.lc2s5.foxhub.space/clubs/${clubId}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      navigate("/my-clubs");
      Toastify({
        text: response.data.message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "green",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDataById();
  }, []);
  return (
    <div className="bg-gray-700 shadow-black shadow-lg flex justify-center gap-9">
      <img src={dataById.imageUrl} width={500} alt="" />
      <form className="flex flex-col justify-around h-screen">
        <div>
          <label className="mx-16">Image Url</label>
          <input type="text" onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <div>
          <label className="mx-16">Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label className="mx-16">Description</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button onClick={(e) => update(e)} className="btn btn-success btn-md">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
