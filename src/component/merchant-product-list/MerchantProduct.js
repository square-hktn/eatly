import React from 'react'
import { Fragment, useEffect, useState } from "react";
import styles from "./product.module.scss";
import sampleFood from "../../assets/Image6.png";
import { productData } from "./data";
import addIcon from "../../assets/Vector9.svg";
function MerchantProduct() {
  return (
    <div className={styles.productCard} key={key}>
    <div className={styles.foodCircle}>
      <img
        src={info.url}
        className={styles.productImage}
        alt="product_image"
      />
    </div>
    <div className={styles.productDetails}>
      <div className={styles.productTexts}>
        <p className={styles.productName}>{info.name}</p>
        <span className={styles.spanClass}>${info.cost}</span>
      </div>
      <label className={styles.smalltitle}>{info.restaurantName}</label>
      {
        (getProductQty(info) < 1) && (
          <div className={styles.btnSection}>
            <img src={addIcon} className={styles.addImage} alt="add_icon" />
            <button className={styles.cartbtn} onClick={() => handleActiveProduct(info)}>Add to Cart</button>
          </div>
        )
      }
      {
        (getProductQty(info) > 0) && (
          <div className={styles.cartSection}>
            <div className={styles.cartAction} onClick={() => toggleQty(info, 'decrease')}>
              <h4 className={styles.cartActionIcon}>-</h4>
            </div>
            <label>{getProductQty(info)}pcs</label>
            <div className={styles.cartAction} onClick={() => toggleQty(info, 'increase')}>
              <h4 className={styles.cartActionIcon}>+</h4>
            </div>
          </div>
        )
      }
    </div>
  </div>
  )
}

export default MerchantProduct