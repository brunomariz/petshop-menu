import React from "react";
import { PetshopService } from "../@types/petshopService";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  petshopService: PetshopService;
  clearBg?: boolean;
};

function Service({ petshopService, clearBg }: Props) {
  const capitalizeFirstLetter = (sentence: string) => {
    const firstLetterCapitalized =
      sentence.charAt(0).toUpperCase() + sentence.slice(1);
    return firstLetterCapitalized;
  };
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
      <div className="text-3xl text-[2rem] my-2 capitalize">
        {petshopService.title}
      </div>
      <div className="my-2 italic opacity-75">
        {capitalizeFirstLetter(petshopService.description)}
      </div>
      <div className="text-3xl flex justify-between items-center my-2">
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
              } p-1 px-5 rounded-md text-lg font-bold flex items-center justify-between`}
            >
              <span className="pr-2 py-1">
                <FaWhatsapp size={25}></FaWhatsapp>
              </span>
              <span>Contato</span>
            </a>
          </button>
        </span>
      </div>
    </li>
  );
}

export default Service;
