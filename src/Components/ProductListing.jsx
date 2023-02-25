import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  DeleteProduct,
  GetProducts,
  SelectedProduct,
  AddProduct,
} from "../redux/action/Actions";

function ProductListing() {
  const { productData, loading } = useSelector((state) => state.allproduct);
  console.log(productData);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(GetProducts(response.data));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  }, [dispatch]);

  if (loading) {
    return <h3>Loading...</h3>;
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
                dispatch(SelectedProduct(console.log("clicked", item.id)))
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
              <button onClick={() => dispatch(DeleteProduct(item.id))}>
                Delete
              </button>
              <button onClick={() => dispatch(AddProduct(item.id))}>
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
