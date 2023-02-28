import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteProduct } from "../redux/action/cartAction";
function ProductDetails() {
  const { cartItems } = useSelector((state) => state.cartproduct);
  // console.log(cartItems);
  const dispatch = useDispatch();

  return (
    <div className="container">
      {cartItems.length === 0 ? (
        <h1>No Items</h1>
      ) : (
        <div className="row">
          {cartItems.map((item) => {
            return (
              <div className="card col-md-3 mx-3" key={item.id}>
                <img className="card-img-top" src={item.image} alt="" />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
                <div>
                  <button onClick={() => dispatch(DeleteProduct(item.id))}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
