import React from "react";
import axios from "axios";
import Toastify from 'toastify-js'
import { Link } from "react-router-dom";
const ClubsCard = ({ data }) => {
    async function LeaveClub(e, id) {
        e.preventDefault()
        try {
            const response = await axios.delete(`https://api.p2.lc2s5.foxhub.space/myclubs/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            console.log(response)
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
                onClick: function(){} // Callback after click
              }).showToast();
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="grid grid-cols-3">
      {data.map((item) => {
        return (
          <>
            <div className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img
                  src={item.Club.imageUrl}
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                 {item.Club.title}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{item.Club.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/update-club/${item.id}/${item.Club.id}`} className=" btn btn-xs btn-success">Update</Link>
                  <button onClick={(e) => LeaveClub(e, item.id)} className=" btn btn-xs btn-warning">Leave Club</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ClubsCard;
