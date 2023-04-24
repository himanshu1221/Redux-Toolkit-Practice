import React from "react";
import Products from "../Components/Products";

const Home = () => {
  return (
    <div
      style={{
        marginTop: 60,
      }}
    >
      <h2 className="heading">Welcome to redux toolkit store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
