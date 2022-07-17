import React, { Fragment } from "react";
import MetaData from "../components/MetaData";
    /* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/react-in-jsx-scope */
import Price from "../components/Price";
import Footer from "../components/Footer";
import Product from "../components/Produc";



const Home = () => (
  <Fragment>
    <MetaData title={'Цемент захиалга'}/>

    <div className="bg-white">
      

  
     <Product />

  
    </div>


  </Fragment>
);

export default Home;
