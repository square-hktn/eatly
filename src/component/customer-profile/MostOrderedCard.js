import React, { useState, useEffect } from "react";
import MostOrderedMealCard from "./MostOrderedMealCard";
import Styles from "./Profile.module.scss";
import { baseUrl } from "../../config";
import { axiosInstance } from "../../api";

const MostOrderedCard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (orders.length < 1) {
      axiosInstance
        .get(`${baseUrl}/order`)
        .then((res) => {
          const response = res.data.data;
          setOrders(response);
          // console.log(response)
        })
        .catch((e) => {
          console.log(e, "ERROR");
        });
    }
  }, [orders]);

  return (
    <div>
      <h1 className={Styles.order_title}>Most Ordered</h1>
      <p className={Styles.order_subtitle}>List of your most ordered dishes</p>
      <div className={Styles.order_container}>
       {orders.length === 0 ? (<h1>No order yet</h1>) : ""}
       
        {Array.isArray(orders) &&
          orders.length > 0 &&
          orders.map((order, key) =>
            order.products.map((info) => (
              <MostOrderedMealCard key={info.id} info={info} />
            ))
          )}
      </div>
    </div>
  );
};

export default MostOrderedCard;
