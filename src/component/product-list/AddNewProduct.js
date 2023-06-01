import React from 'react'

import sampleFood from "../../assets/Image6.png";
import addIcon from "../../assets/Vector9.svg";
import styles from "./product.module.scss";

function AddNewProduct() {
  return (
    <div className={styles.productCard} >
      <div className={styles.addNewProductDetails}>
        <div class="flex-col">
          
          <p class="text-[#99592a] font-bold justify-center text-center">
            <img src={require("../../assets/plus.png")}/>
          </p>
          <p class="text-[#99592a] font-bold">Add New Product</p>
        </div>
    </div>
  </div>
  )
}

export default AddNewProduct