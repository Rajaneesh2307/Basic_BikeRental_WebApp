import React, { useContext, useEffect, useState } from "react";
import style from "./BikeRental.module.css";
import { Navigate } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import { Context } from "../Context/Createcontext";

const BikeRental = () => {
  const { ourData, HandleButton, data } = useContext(Context);

  if (data) {
    return <Navigate to="/AdminDashBoard" />;
  }

  return (
    <div className={style.div}>
      <div className={style.grid}>
        {ourData.map((value) => {
          return (
            <div className={style.mainDiv} key={value.id}>
              <img src={value.image} />
              <h3>Bike Name: {value.BikeName}</h3>
              <h3>Bike Number: {value.BikeNumber}</h3>
              <h3>Bike Rent: {value.BikeRent}</h3>
              <h3>Bikes Available: {value.BikesAvailable}</h3>
              <button onClick={() => HandleButton(value.id)}>Book Now</button>
            </div>
          );
        })}
      </div>
      {/* Whenever the Navigate value become true then only the AdminDashboard can take our bikeData through props... */}
      {/* {navigate && <AdminDashboard OurBikeData={bikeData} />} */}
    </div>
  );
};

export default BikeRental;
