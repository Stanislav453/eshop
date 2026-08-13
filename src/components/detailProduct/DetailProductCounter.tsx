import { useState } from "react";

export const DetailProductCounter = () => {
  const [productCount, setProductCount] = useState(1);



  return (
    <div className="flex py-2 items-center">
      <p className="font-bold pr-2 text-xl">Quantity: </p>
      <button
        className="text-xl p-2 border"
        onClick={() => setProductCount((prev) =>  prev + 1)}
      >
        +
      </button>
      <p className="text-xl p-2">{productCount}</p>
      <button
        className="text-xl p-2 border"
        onClick={() => setProductCount((prev) => (prev > 1 ? prev - 1 : 1))}
      >
        -
      </button>
    </div>
  );
};
