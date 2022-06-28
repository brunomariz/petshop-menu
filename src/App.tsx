import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ServiceList from "./components/ServiceList";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-metropoleTeal bg-opacity-20">
      <div className="max-w-screen-sm flex flex-col mx-auto">
        <Header></Header>
        <ServiceList></ServiceList>
      </div>
    </div>
  );
}

export default App;
