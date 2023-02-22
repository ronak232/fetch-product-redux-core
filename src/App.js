// import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../src/sass/style";
import ProductListing from "./Components/ProductListing";
import Loader from "./Loader/Loading"

// We can use context of the components.
function App() {
  // const { dataResponse, dataloading } = FetchContext();
  // const [productList, setProductlist] = useState({});
  // console.log(dataResponse)
  // useEffect(() => {
  //   if (dataResponse) {
  //     setProductlist(dataResponse);
  //   }
  // }, [dataResponse]);
  return (
    <Router>

      <div className="App">
        <h2>Redux</h2>
        {/* <NavigationBar /> */}
        {/* {dataloading ? <Loader /> : ""} */}
        
        <Routes>
        <Route
        path="/"
        exact
        element={<ProductListing/>}
        />
        
        {/* <Route path="/form" element={dataloading ? "" : <ProductForm />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      </div>
    </Router>
  );
}

export default App;
