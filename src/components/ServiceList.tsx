import React from "react";
import { services } from "../data/services";
import Service from "./Service";

type Props = {};

function ServiceList({}: Props) {
  return (
    <ul className="text-xl">
      {services.map((service, index) => {
        return (
          <Service petshopService={service} clearBg={index % 2 == 0}></Service>
        );
      })}
    </ul>
  );
}

export default ServiceList;
