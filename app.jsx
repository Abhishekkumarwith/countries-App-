import React, { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeContext";

export default function App() {

useEffect(()=>{
  console.log('__Developed_By_Abhishek');
},[])



  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
