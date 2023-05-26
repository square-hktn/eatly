import { Fragment } from "react";
import styles from './product.module.scss';
import sampleFood from '../../assets/Image6.png';
import { productData } from "./data";
import addIcon from '../../assets/Vector9.svg'

const ProductCard = (props) => {
  return (
    <Fragment>
      {
        Array.isArray(productData) && productData.map((info, key) => (
          <div className={styles.productCard} key={key}>
            <div className={styles.foodCircle}>
              <img src={sampleFood} className={styles.productImage}/>
            </div>
            <div className={styles.productDetails}>
              <center>
                <p className={styles.productName}>{info.name}</p>
                <span>{info.cost}</span>
              </center>
              <label>{info.restaurantName}</label>
              <div className={styles.btnSection}>
                <img src={addIcon} className={styles.addImage}/>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))
      }
    </Fragment>
  )
}
export default ProductCard;