import React from "react";
import style from "./SearchPriceBox.module.css";

function SearchComponent({ searchPrice, setSearchPrice,searchPriceHandler }) {

  return (
    <div className={style.container}>
      <input
        type="text"
        placeholder="Search price"
        value={searchPrice}
        onChange={(e) => setSearchPrice(e.target.value)}
      />
      <button onClick={searchPriceHandler}>search</button>
    </div>
  );
}

export default SearchComponent;
