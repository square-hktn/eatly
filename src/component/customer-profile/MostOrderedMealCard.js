import React, { useState, useEffect } from "react";
import MostOrderedMealCard from "./MostOrderedMealCard";
import Styles from "./Profile.module.scss";
import { baseUrl } from "../../config";
import { axiosInstance } from "../../api";

const MostOrderedCard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (orders.length === 0) {
      axiosInstance
        .get(`${baseUrl}/order`)
        .then((res) => {
          const response = res.data.data;
          setOrders(response);
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
      <div>
        {orders.length > 0 ? (
          orders.map((info, key) => (
            <MostOrderedMealCard key={key} info={info} />
          ))
        ) : (
          <p>No orders</p>
        )}
      </div>
    </div>
  );
};

export default MostOrderedCard;
