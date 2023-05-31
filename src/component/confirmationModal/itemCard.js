import { Fragment } from "react"
import styles from './confirmation.module.scss';

const ItemCard = (props) => {
  return (
    <Fragment>
      {props.cartItems.length < 1 && (
        <div>
          No products
        </div>
      )}
      
      {props.cartItems && props.cartItems.length > 0 && props.cartItems.map((info, key) => (
        <div className={styles.itemWrapper} key={key}>
          <div className={styles.itemImageSection}>
            <div className={styles.itemImage}>
              <img className={styles.itemImgstyle} src={info.url}/>
              <p className={styles.itemName}>{info.name}</p>
            </div>
            <p>{info.qty}Pcs</p>
            <p>${info.qty * info.cost}</p>
          </div>
          <input type="text" placeholder="Additional notes" className={styles.itemInput}/>
        </div>
      ))}
    </Fragment>
  )
}
export default ItemCard;