import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ServiceList from "./components/ServiceList";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-metropoleTeal bg-opacity-50">
      <Header></Header>
      <ServiceList></ServiceList>
    </div>
  );
}

export default App;
