import React, { useEffect, useState } from "react";
import styles from "./Stylesheets/Services.module.css";
import baseUrl from "../Constants/baseURL";
import data from "../data/tempservices.json"
function Services() {
  const [serviceData, setData] = useState(data);
  const getServices = async () => {
    const res = await fetch(`${baseUrl}/user/services`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res=>{
      return res.json();
    }).then(data=>{
      setData(data);
    }).catch(err=>{
      console.log(err);
    });
    console.log(serviceData);
  };

  useEffect(() => {
    getServices();
  }, []);
  return (
    <div id="services" className={styles.container}>
      <div className={styles.cardHolder}>
        <div id={styles.first} className={styles.cardContainer}>
          <h1 onClick={getServices}>Explore Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            suscipit dicta ullam a temporibus placeat.
          </p>
        </div>
        {serviceData.map((el) => {
          return (
            <>
              <div key={el} className={styles.cardContainer}>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <img src="/" alt={el.category} />
                  </div>
                  <button>Order</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <button className={styles.seeMore}>See More</button>
    </div>
  );
}

export default Services;
