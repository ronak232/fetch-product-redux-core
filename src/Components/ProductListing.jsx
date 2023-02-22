import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  DeleteProduct,
  GetProducts,
  SelectedProduct,
} from "../redux/action/Actions";

function ProductListing() {
  const { productData } = useSelector((state) => state.allproduct);

  const dispatch = useDispatch();
  const fetchedData = async () => {
    await axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(GetProducts(response.data));
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };
  useEffect(() => {
    fetchedData();
  }, []);

  return (
    <div className="container">
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductListing;
