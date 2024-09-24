import React, { createContext, useContext, useReducer, useState } from "react";

export const DataContet = createContext();

export const DataProrider = ({ children, reducer, initialState }) => {
  return (
    <DataContet.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataContet.Provider>
  );
};
