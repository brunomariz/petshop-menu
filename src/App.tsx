import React from "react";
import "./App.css";
import ServiceList from "./components/ServiceList";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <div className="bg-metropoleTeal bg-opacity-20">
      <div className="max-w-screen-sm flex flex-col mx-auto">
        <Header></Header>
        <ServiceList></ServiceList>
        <BackToTop></BackToTop>
      </div>
    </div>
  );
}

export default App;
