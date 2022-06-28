import React from "react";
import { PetshopService } from "../@types/petshopService";

type Props = {
  petshopService: PetshopService;
  clearBg?: boolean;
};

function Service({ petshopService, clearBg }: Props) {
  const realLocale = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "brl",
  });
  return (
    <li
      className={
        `px-5 py-2 w-full  bg-metropoleGreen ` +
        `${clearBg ? "bg-opacity-20" : "bg-opacity-75"}`
      }
    >
      <div className="text-3xl my-2">{petshopService.title}</div>
      <div className="my-2 italic">{petshopService.description}</div>
      <div className="text-2xl flex justify-between items-center my-2">
        <span>
          {typeof petshopService.price == "number"
            ? realLocale.format(petshopService.price)
            : `Valor: ${petshopService.price}`}
        </span>
        <span>
          <button>
            <a
              target={"_blank"}
              href={`https://wa.me/${process.env.REACT_APP_TEL_NUMBER}`}
              className={`${
                clearBg ? "bg-metropoleGreen" : "bg-metropoleTeal"
              } p-1 px-8 rounded-md text-lg block font-bold`}
            >
              Contato
            </a>
          </button>
        </span>
      </div>
    </li>
  );
}

export default Service;
