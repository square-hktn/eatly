import MostOrderedMealCard from "./MostOrderedMealCard";
import Styles from "./Profile.module.scss";
import { useState, useEffect } from "react";
//import SingleOrder from "../../pages/orders/order-section";
import { baseUrl } from "../../config";
import { axiosInstance } from "../../api";

const MostOrderedCard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (orders && orders.length < 1) {
      axiosInstance
        .get(`${baseUrl}/order`)
        .then((res) => {
          const response = res.data.data;
          setOrders(response);
          console.log(orders);
        })
        .catch((e) => {
          console.log(e, "ERROR");
        });
    }
  });
  return (
      <div>
        <h1 className={Styles.order_title}>Most Ordered</h1>
        <p className={Styles.order_subtitle}>
          List of your most ordered dishes
        </p>
        <div>
          {orders.map((info, key) => (
            <MostOrderedMealCard key={key} info={info} />
          ))}
        </div>
      </div>

  );
};

export default MostOrderedCard;
