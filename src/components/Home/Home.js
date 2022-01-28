import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product.js";
import db from "../../firebase";
import {
  doc,
  query,
  collection,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

function Home() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "products"));
    onSnapshot(q, (snapshot) => {
      setProd(snapshot.docs.map((doc) => ({ data: doc.data() })));
    });
  }, []);

  console.log(prod);

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        {prod &&
          prod.map(({ data }) => (
            <div className="home_row">
              <Product
                id={data.id}
                title={data.title}
                price={data.price}
                rating={data.rating}
                image={data.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
