import React from 'react'
import sampleFood from "../../assets/Image6.png";

import addIcon from "../../assets/Vector9.svg";
import styles from "./product.module.scss";

function Product() {
  return (
    <div className={styles.productCard} >
  
    <div className={styles.productDetails}>
 
   <div class="flex-col">
   <div  class="w-3/4 flex mt-5">
      <img
        src={sampleFood}
        className={styles.productImage}
        alt="product_image"
      />
     </div>
      <div class="mt-3 mb-2">
        <p class="text-center text-lg ">Spicy Seasoned</p>
        <p class="text-center text-md mt-0">$ 3.44</p>
      </div>
        
      
      <div className={styles.btnSection}>
      <button className={styles.cartbtn}>
        <span div class="flex">
          <img src={require("../../assets/pencil.png")} alt="edit"/>
         <p class="text-white ml-0">Edit</p>
        </span>
        
      </button>
      </div>
   </div>
    

    </div>
  </div>
  )
}

export default Product