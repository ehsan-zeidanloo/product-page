import React from "react";
import style from "./Card.module.css"

function Card({ product }) {
  const { name, img, price } = product;
  return (
    <div className={style.card}>
      <img src={img} alt="" />
      <p>{name}</p>
      <p className={style.price}><span>$</span>  {price}</p>
    </div>
  );
}

export default Card;
