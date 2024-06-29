import React, { createContext, useState } from "react";

export const OurCreateContext = createContext();

const MyCreateContext = ({ children }) => {
  const InitialData = {
    ID: "",
    Name: "",
    MobileNumber: "",
    PickUp: "",
    DropOff: "",
    RideStatus: false,
    BikeNumber: "",
    Amount: "",
  };
  const [inputData, setInputData] = useState(InitialData);
  const [myBikeData, setMyBikeData] = useState([]);

  const HandleChanges = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };

  const HandleButton = () => {
    setMyBikeData([...myBikeData, inputData]);
    setInputData(InitialData);
  };

  return (
    <OurCreateContext.Provider
      value={{ myBikeData, HandleButton, HandleChanges, inputData }}
    >
      {children}
    </OurCreateContext.Provider>
  );
};

export default MyCreateContext;
