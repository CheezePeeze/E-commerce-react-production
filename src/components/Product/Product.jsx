import React from "react";
import Info from "./Details/Info";
import Price from "./Details/Price";
import Quantity from "./Details/Quantity/Quantity";
import AddToCartButton from "./Details/AddToCartButton/AddToCartButton";
import ThumbnailsSlider from "./PopupGallery/ThumbnailsSlider";
import { useState } from "react";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);


  return (
    <div className="product px-0 md:px-6">
      <div className="container mx-auto mb-20 md:mt-10 md:mb-32 lg:mt-[5.5rem]">
        <div className="grid grid-cols-1 mx-0 md:grid-cols-2 md:gap-10 lg:mx-12 lg:gap-20 xl:gap-32">
          <ThumbnailsSlider modalIsOpen={false} />
          <div className="p-6 md:p-0 md:mt-7 lg:mt-14">
            <Info />
            <Price />
            <div className="actions flex flex-col md:flex-row">
              <Quantity
                quantity={quantity}
                decreaseQuantity={() => setQuantity((prev) =>
                  prev === 1 ? 1 : prev - 1
                )}
                increaseQuantity={() => setQuantity((prev) => prev + 1)}
              />
              <AddToCartButton quantity={quantity} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
