import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";

function Product({ title, price, image, star }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>&#x20B9;</small> <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(star)
            .fill()
            .map((_, i) => (
              <StarIcon />
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
