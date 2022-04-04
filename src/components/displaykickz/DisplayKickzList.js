import React, { useState, useEffect } from "react";
import { getAllShoes } from "../../modules/DisplayManager";
import { DisplayKickzCard } from "./DisplayKickzCard";
import { deleteShoe } from "../../modules/DisplayManager";
import { useNavigate } from "react-router-dom";

export const DisplayKickzList = () => {
  const [shoes, setShoes] = useState([]);

  const navigate = useNavigate();

  const getShoes = () => {
    return getAllShoes().then((shoesFromAPI) => {
      setShoes(shoesFromAPI);
      // We'll do something more interesting with this data soon.
    });
  };

  useEffect(() => {
    getShoes();
  }, []);

  const handleDeleteShoe = (id) => {
    deleteShoe(id).then(() => getAllShoes().then(setShoes));
  };

  return (
    <>
      {" "}
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            navigate("/myCollection/");
          }}
        >
          Find
        </button>
      </section>
      <div className="container-cards">
        {shoes.map((shoe) => (
          <DisplayKickzCard
            key={shoe.id}
            collection={shoe}
            handleDeleteShoe={handleDeleteShoe}
          />
        ))}
      </div>
    </>
  );
};
