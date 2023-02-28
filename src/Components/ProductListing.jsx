import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loading";
import {
  // DeleteProduct,
  GetProducts,
  SelectedProduct,
} from "../redux/action/Actions";
import { AddProduct } from "../redux/action/cartAction";

function ProductListing() {
  const { productData, loading } = useSelector((state) => state.allproduct);
  // console.log(productData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProducts())
  }, [dispatch]);

  if (loading) {
    return <div><Loader/></div>;
  }

  return (
    <div className="container">
      <h2>Redux</h2>
      <div className="row">
        {productData?.map((item) => {
          return (
            <div
              className="card col-md-3 px-2"
              key={item.id}
              onClick={() =>
                dispatch(SelectedProduct(console.log("clicked"), item ))
              }
            >
              <div className="w-100">
                <img
                  className="w-100 img-fluid"
                  src={item.image}
                  alt="someImage"
                />
              </div>
              <h5 className="card-title">{item.title}</h5>
              
              <button onClick={() => dispatch(AddProduct(item))}>
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListing;
