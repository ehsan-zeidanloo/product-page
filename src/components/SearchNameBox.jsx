import React, { useState } from "react";
import { categories } from "../js/categories";
import style from "./SearchNameBox.module.css";

function SearchNameBox({
  searchName,
  setSearchName,
  categoriHandler,
  activeCategory,
}) {
  return (
    <div className={style.SearchNameBox}>
      <input
        type="text"
        placeholder="Enter name"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value.toLowerCase().trim())}
      />
      <div className={style.category}>
        {categories.map((item) => {
        
          return (
            <button
              key={item.id}
              onClick={() => categoriHandler(item.type)}
              className={
                activeCategory === item.type.toLowerCase() ? style.selected : ""
              }
            >
              {item.type}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SearchNameBox;
