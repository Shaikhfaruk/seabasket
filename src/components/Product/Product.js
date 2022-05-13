import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div>
      <div className="product--container">
        <h1 className="product--heading">A GLANCE AT OUR PRODUCT</h1>
        <div className="product--video">
          <iframe
            title="productVideo"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/xAqwQrwpXxA"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default Product;
