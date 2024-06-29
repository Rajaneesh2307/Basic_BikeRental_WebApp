import React, { useContext } from "react";
import { OurCreateContext } from "../Context/MyCreateContext";
import style from "./AllBookings.module.css";
import { Context } from "../Context/Createcontext";

const AllBookings = () => {
  const { myBikeData } = useContext(OurCreateContext);
  const { UpdateData } = useContext(Context);

  return (
    <div style={{ marginTop: "70px" }}>
      <div>
        <table className={style.table}>
          <thead>
            <tr className={style.tr}>
              <th className={style.th}>ID</th>
              <th className={style.th}>User Name</th>
              <th className={style.th}>Mobile Number</th>
              <th className={style.th}>Bike Number</th>
              <th className={style.th}>Pick-Up</th>
              <th className={style.th}>Drop-Off</th>
              <th className={style.th}>Amount</th>
              <th className={style.th}>Ride Status</th>
            </tr>
          </thead>
          <tbody>
            {myBikeData.map((value, index) => (
              <tr key={index} className={style.tr}>
                <td className={style.td}>{value.ID}</td>
                <td className={style.td}>{value.Name}</td>
                <td className={style.td}>{value.MobileNumber}</td>
                <td className={style.td}>{value.BikeNumber}</td>
                <td className={style.td}>{value.PickUp}</td>
                <td className={style.td}>{value.DropOff}</td>
                <td className={style.td}>{value.Amount}</td>
                <td className={style.td}>
                  <button
                    onClick={() => UpdateData(value.ID, value.RideStatus)}
                    className={style.button}
                  >
                    {value.RideStatus ? "Yes" : "No"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBookings;
