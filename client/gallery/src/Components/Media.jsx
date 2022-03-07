import React, { useEffect, useState } from "react";
import "./Media.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllFeeds } from "../myRedux/imagedetailsSlice";
import { Button } from "bootstrap";

export const Media = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(async () => {
    const response = await dispatch(getAllFeeds());

    setData(response.payload.data);
  }, [dispatch]);

  console.log("datatata:", data);

  return (
    <div className="gallery">
      {data.map((item) => (
        <div className="pics" key={item._id}>
          <img src={item.image_urls} className = "image" style={{ width: "100%" }} />
          <div className="middle">
            <div onClick={()=>{

              
            }} className="text">Show Details</div>
          </div>
        </div>
      ))}
    </div>
  );
};
