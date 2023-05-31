import React from 'react'
import Sidebar from '../../component/sidebar'
import Product from '../../component/product-list/Product'
function MerchantProductList() {
  return (
    <div class="flex w-full">
      <Sidebar/>
      <div class="flex w-11/12">
        <div class="flex-col w-full">
          <Product/>
        </div>
      </div>
    </div>
  )
}

export default MerchantProductList