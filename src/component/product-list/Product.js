import React from 'react'
import sampleFood from "../../assets/Image6.png";

import addIcon from "../../assets/Vector9.svg";
import styles from "./product.module.scss";

function Product({show}) {
  return (
    <div className={styles.productCard} >
  
    <div className={styles.productDetails}>
 
   <div class="flex-col w-8/10">
   <div  class="w-5/6 flex mt-5">
      <img
        src={sampleFood}
        className={styles.productImage}
        alt="product_image"
      />
     </div>
      <div class="mt-3 mb-5 w-9/10 flex-col">
        <div class="max-h-[5px]">
          <p class="text-center text-sm font-semibold line-clamp-2">Spicy Seasoned  </p>
        </div>
        <div class="max-h-[5px] mt-4">
         <p class="text-center text-xs text-gray-500 mt-0">$ 3.44</p>
        </div>
        
      </div>
        
      
      <div className={styles.btnSection}>
      <button className={styles.cartbtn} onClick={()=>{
        show()
      }}>
        <span div class="flex justify-center p-2 ">
          <img src={require("../../assets/pencil.png")} alt="edit" class="m-1 mt-3"/>
         <p class="text-white ml-0 mt-3 text-sm">Edit Dish</p>
        </span>
        
      </button>
      </div>
   </div>
    

    </div>
  </div>
  )
}

export default Product