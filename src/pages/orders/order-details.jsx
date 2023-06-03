import { Fragment } from "react"
import styles from './order.module.scss';

const OrderDetails = (props) => {
  const products = props.products;
  return (
    <Fragment>
      <div className={styles.detailsContainer}>
        {
          Array.isArray(products) && products.length > 0 && products.map((info, key) => (
            <div className={styles.detailItemMap} key={key}>
              <div className={styles.orderImageSection}>
                <img className={styles.orderItemImage} alt="order image" src={info.url}/>
              </div>
              <div className={styles.orderDetailsDescription}>
                <h2 className={styles.orderDetailsDescriptionText}>{info.name}</h2>
                <p className={styles.orderDetailsDescriptionAmount}>$ {info.unitCost}</p>
              </div>
              <h4 className={styles.orderQtys}>2 pcs</h4>
            </div>
          ))
        }
      </div>
    </Fragment>
  )
}
export default OrderDetails;