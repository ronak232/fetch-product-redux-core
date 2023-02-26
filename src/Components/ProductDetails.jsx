import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct } from "../redux/action/cartAction";
function ProductDetails() {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cartproduct);
  console.log(cartItems);
  localStorage.setItem("cartProduct", JSON.stringify(cartItems));
  return (
    <div>
      {cartItems.length === 0 ? (
        <div>No item in the cart</div>
      ) : (
        // cartItems?.map((item) => {
        // console.log(item);
        // return (
        <div>
          {/* <h1>{title}</h1> */}
          {/* <button onClick={() => dispatch(DeleteProduct(console.log("sdads"), item.id))}> */}
          Delete
          {/* </button> */}
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
