import React from 'react'
import sampleFood from "../../assets/Image6.png";

import addIcon from "../../assets/Vector9.svg";
import styles from "../product/product.module.scss";

function Product() {
  return (
    <div className={styles.productCard} >
    <div className={styles.foodCircle}>
      <img
        src={sampleFood}
        className={styles.productImage}
        alt="product_image"
      />
    </div>
    <div className={styles.productDetails}>
      <center>
        <p className={styles.productName}>Spicy Seasoned</p>
        <span className={styles.span}>$ 3.44</span>
      </center>
      <label className={styles.smalltitle}>Benny;s Place</label>
      <div className={styles.btnSection}>
        <img src={addIcon} className={styles.addImage} alt="add_icon" />
        <button className={styles.cartbtn}>Add to Cart</button>
      </div>
    </div>
  </div>
  )
}

export default Product