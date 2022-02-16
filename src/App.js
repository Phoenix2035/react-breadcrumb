import { Route, Routes } from 'react-router-dom'
import MyBreadCrumb from "./components/BreadCrumb";


import Home from "./components/Home"
import Products from "./components/Products"
import Customers from "./components/Customers";
import Hat from "./components/Hat";
import Shirt from "./components/Shirt";


function App() {
    return (
        <div style={{ display: "grid", placeItems: "center", height:"20%" }}>
            <MyBreadCrumb />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/hat" element={<Hat />} />
                <Route path="/products/shirt" element={<Shirt />} />
                <Route path="/customers" element={<Customers />} />
            </Routes>
        </div>
    );
}

export default App;
