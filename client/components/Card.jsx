import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Toastify from 'toastify-js'
const Card = ({ data }) => {
    const navigate = useNavigate()
    async function JoinClub(e, id){
        e.preventDefault()
        try {
           const response = await axios.post(`https://api.p2.lc2s5.foxhub.space/myclubs/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.access_token}`
            }
           })
           Toastify({
            text: "Join Club Success",
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
            onClick: function(){} // Callback after click
          }).showToast();
          navigate('/my-clubs')
        } catch (error) {
            Toastify({
                text: "Error when join club",
                duration: 3000,
                destination: "https://github.com/apvarun/toastify-js",
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "left", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();
        }
    }
  return (
    <div className="grid grid-cols-3 gap-8">
      {data.map((item) => {
        return (
          <>
            <div key={item.id} className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={item.imageUrl}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <button onClick={(e) => JoinClub(e, item.id)} className="btn btn-xs btn-success">Join</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Card;
