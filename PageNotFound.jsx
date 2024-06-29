import React from "react";
import { Link } from "react-router-dom";
import style from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={style.page_not_found}>
      <img
        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=996&t=st=1719470390~exp=1719470990~hmac=3b472ae0d35025ca17be11a84acc035b971e386b690295beed33033091056155"
        alt=""
      />
      <Link className={style.link} to={"/BikeRental"}>
        <p>Go Back!!!</p>
      </Link>
    </div>
  );
};

export default PageNotFound;
