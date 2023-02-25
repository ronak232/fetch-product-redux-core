import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProductDetails() {
  // const [cartItems, setCartitems] = useState(
  //   JSON.parse(localStorage.getItem("productCart")) || []
  // );

  const { productData } = useSelector((state) => state.allproducts);

  return (
    <div>
      {productData?.map((item) => {
        console.log(item);
        return (
          <div>
            <h1>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetails;
