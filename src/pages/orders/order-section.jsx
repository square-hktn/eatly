import styles from "./order.module.scss";
import pending from "../../assets/pending.svg";
import downArrow from "../../assets/arrow-ios-down.svg";
import { useState } from "react";
import OrderDetails from "./order-details";

const SingleOrder = (props) => {
  const orders = props.orders;
  const [showDetails, setShowDetails] = useState(false);
  const [activeId, setActiveId] = useState(null);

  const toggleDetailVisibility = (id) => {
    setShowDetails(!showDetails);
    setActiveId(id);
  };

  const getTimeConstraint = (dateCreated) => {
    let currentDate = new Date();
    currentDate.setMinutes(new Date(currentDate).getMinutes() - 20);
    const orderDate = new Date(dateCreated);
    return currentDate > orderDate;
  };

  const getDateForOrder = (dateCreated) => {
    dateCreated = new Date(dateCreated).getDay;

    const dat = dateCreated.getDay();
    getTimeConstraint(dat);
    return `$getTimeConstraint(dat)`;
  };

  return (
    <>
      {Array.isArray(orders) &&
        orders.length > 0 &&
        orders.map((info, key) => (
          <div className={styles.singleOrderWrapper}>
            <div className={styles.orderStructure}>
              <div className={styles.statusIcon}>
                <div className={styles.circleIcon}>
                  <img
                    className={styles.pendingIcon}
                    alt="status icon"
                    src={pending}
                  />
                </div>
              </div>
              <div className={styles.orderDesc}>
                <h2 className={styles.headerText}>
                  {info.products[0]?.restaurantName} | Order #ET
                  {info._id.slice(0, 8)}
                </h2>
                <h4 className={styles.headerStatus}>On the way</h4>
                <div
                  className={styles.detailIcon}
                  onClick={() => toggleDetailVisibility(info._id)}
                >
                  <h4 className={styles.detailsText}>See Details</h4>
                  <img
                    className={
                      showDetails && activeId === info._id
                        ? styles.upArrowStyle
                        : styles.downArrowStyle
                    }
                    alt="down arrow"
                    src={downArrow}
                  />
                </div>
              </div>
              <p>
                {(() => getTimeConstraint())
                  ? "Few minutes ago"
                  : getDateForOrder(info.createdAt)}
              </p>
            </div>
            <div className={styles.btnOrderSection}>
              {showDetails && activeId === info._id && (
                <OrderDetails products={info.products} />
              )}
              <button className={styles.actionButton}>Cancel Order</button>
            </div>
          </div>
        ))}
    </>
  );
};
export default SingleOrder;
