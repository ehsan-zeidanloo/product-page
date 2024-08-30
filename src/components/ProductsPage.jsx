import React, { useState, useEffect } from "react";
import { products } from "../js/dataProducts";
import { categories } from "../js/categories";
import Card from "./Card";
import SearchNameBox from "./SearchNameBox";
import SearchPriceBox from "./SearchPriceBox";

import { searchByName, SearchByPrice, filterProducts } from "../helper/helper";
import style from "./ProductsPage.module.css";

function ProductsPage() {
  const [displayed, setDisplayed] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchPrice, setSearchPrice] = useState();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    let finalProduct = searchByName(products, searchName);
    setDisplayed(finalProduct);
  }, [searchName, searchPrice]);

  const categoriHandler = (tagName) => {
    const category = tagName.toLowerCase();
    setActiveCategory(category);
    console.log("Active Category:", activeCategory);
    console.log("Item Type:", tagName.toLowerCase());
    if (category === "all") {
      setDisplayed(products);
    } else {
      let filterByCategory = products.filter(
        (product) => product.type === category
      );
      setDisplayed(filterByCategory);
    }
  };

  const searchPriceHandler = () => {
    if (searchPrice !== undefined || searchPrice !== "") {
      let filterByPrice = SearchByPrice(displayed, searchPrice);

      setDisplayed(filterByPrice);
    }
  };

  return (
    <>
      <SearchNameBox
        searchName={searchName}
        setSearchName={setSearchName}
        categoriHandler={categoriHandler}
        activeCategory={activeCategory}
      />
      <SearchPriceBox
        searchPrice={searchPrice}
        setSearchPrice={setSearchPrice}
        searchPriceHandler={searchPriceHandler}
      />
      <div className={style.container}>
        {displayed.map((product) => (
          <Card key={product.name} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductsPage;
