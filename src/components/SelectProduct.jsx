import { useState } from "react";

const images = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];
function SelectProduct() {
  const [selectImg, setSelectImg] = useState([images[0]]);
  return (
    <div className="">
      <img
        src={selectImg}
        alt="img"
        className="w-full h-2/3 object-cover rounded-none md:rounded-xl mb-0 md:mb-8"
      />
      <div className="md:flex w-full gap-4 justify-center hidden">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt="product"
              className="w-full h-20 object-cover rounded-xl"
              onClick={() => setSelectImg(image)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SelectProduct;
