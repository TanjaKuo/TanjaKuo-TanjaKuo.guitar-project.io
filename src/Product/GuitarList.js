import React from "react";
import guitarData from "../guitarData";
import SingleGuitar from "./SingleGuitar";

const GuitarList = (guitar) => {
  return (
    <div>
      {/*   {guitar.map((guitar, i) => {
        return (
          <>
            <SingleGuitar
              key={guitar[i].id}
              name={guitar[i].name}
              brand={guitar[i].brand}
              color={guitar[i].color}
              price={guitar[i].price}
              image={guitar[i].image}
            />
          </>
        );
      })} */}
      <h4>hi</h4>
    </div>
  );
};
/* const GuitarList = (guitar) => {
  return (
    <>
      {guitar.map((g, i) => {
        return (
          <SingleGuitar
            key={guitar[i].id}
            name={guitar[i].name}
            brand={guitar[i].brand}
            color={guitar[i].color}
            price={guitar[i].price}
            image={guitar[i].image}
          />
        );
      })}
    </>
  );
}; */

export default GuitarList;
