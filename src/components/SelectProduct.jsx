import { useState } from "react";
import { images } from "../../utils/dummyData";


function SelectProduct() {
  const [selectImg, setSelectImg] = useState([images[0]]);
  return (
    <div className="md:w-[90%]">
      <img
        src={selectImg}
        alt="img"
        className="w-full object-cover rounded-none md:rounded-xl mb-0 md:mb-8"
      />
      <div className="md:grid md:grid-cols-4 w-full gap-4 justify-center hidden">
        {images.map((image, index) => {
          return (
            <img
              key={index}
              src={image}
              alt="product"
              className="w-full aspect-square object-cover rounded-xl"
              onClick={() => setSelectImg(image)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SelectProduct;
