import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const Createcontext = ({ children }) => {
  const [ourData, setOurData] = useState([]);
  const [bikeData, setBikeData] = useState([]);
  const [data, setData] = useState(false);

  const FetchingData = async () => {
    try {
      let MyData = await fetch(`http://localhost:3000/Bikes`);
      let MyDataJson = await MyData.json();
      console.log(MyDataJson);
      setOurData(MyDataJson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchingData();
  }, []);

  const FetchingOurData = async (id, RideStatus) => {
    const object = {
      RideStatus: !RideStatus,
    };
    try {
      let fetchData = await fetch(`http://localhost:3000/Bikes/${id}`, {
        method: "PATCH",
        body: JSON.stringify(object),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await fetchData.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const UpdateData = (id, RideStatus) => {
    FetchingOurData(id, RideStatus);
  };

  const HandleButton = (id) => {
    const FilterData = ourData.filter((value) => {
      return value.id === id;
    });
    setBikeData(FilterData);
    setData(true);
  };
  console.log(bikeData);

  const ResetData = () => {
    setData(false);
  };

  return (
    <Context.Provider
      value={{ ourData, bikeData, data, HandleButton, ResetData, UpdateData }}
    >
      {children}
    </Context.Provider>
  );
};

export default Createcontext;
