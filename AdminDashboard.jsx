import React, { useContext, useEffect, useState } from "react";
import style from "./AdminDashboard.module.css";
import { Context } from "../Context/Createcontext";
import { OurCreateContext } from "../Context/MyCreateContext";

const AdminDashboard = () => {
  const { bikeData, ResetData } = useContext(Context);
  const { inputData, myBikeData, HandleButton, HandleChanges } =
    useContext(OurCreateContext);

  console.log("OurBikeData in AdminDashboard:", bikeData);
  console.log(myBikeData);

  return (
    <div className={style.div}>
      <div className={style.subDiv}>
        <div>
          {bikeData.map((value) => {
            return (
              <div key={value.id} className={style.mainDiv}>
                <img onClick={ResetData} src={value.image} alt="" />
                <p>Bike Name: {value.BikeName}</p>
                <p>Bike Number: {value.BikeNumber}</p>
                <p>Bike Rent: {value.BikeRent}</p>
                <p>Bikes Available: {value.BikesAvailable}</p>
              </div>
            );
          })}
        </div>
        <div className={style.inputs}>
          <div className={style.input}>
            <p>Enter Your ID:-</p>
            <input
              type="number"
              placeholder="Enter Your ID"
              value={inputData.ID}
              name="ID"
              onChange={HandleChanges}
            />
          </div>
          <div className={style.input}>
            <p>Enter Your Name:-</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              value={inputData.Name}
              name="Name"
              onChange={HandleChanges}
            />
          </div>
          <div className={style.input}>
            <p>Enter Your Mobile No:-</p>
            <input
              type="number"
              placeholder="Enter Your Mobile Number"
              value={inputData.MobileNumber}
              name="MobileNumber"
              onChange={HandleChanges}
            />
          </div>
          <div className={style.input}>
            <p>Enter Your Pick-Up Loc:-</p>
            <input
              type="date"
              placeholder="Enter Your Pick-Up"
              value={inputData.PickUp}
              name="PickUp"
              onChange={HandleChanges}
            />
          </div>
          <div className={style.input}>
            <p>Enter Your Drop-Off:-</p>
            <input
              type="date"
              placeholder="Enter Your Drop-Off"
              value={inputData.DropOff}
              name="DropOff"
              onChange={HandleChanges}
            />
          </div>
          <div className={style.input}>
            <p>Enter Bike Number:-</p>
            <input
              type="text"
              placeholder="Enter Bike Number"
              value={inputData.BikeNumber}
              name="BikeNumber"
              onChange={HandleChanges}
            />
          </div>
          <div className={style.input}>
            <p>Enter Total Amount:-</p>
            <input
              type="number"
              placeholder="Enter Total Amount"
              value={inputData.Amount}
              name="Amount"
              onChange={HandleChanges}
            />
          </div>
          <button onClick={HandleButton}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
