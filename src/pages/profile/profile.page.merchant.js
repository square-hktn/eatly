import React from 'react'
import TotalRevenueCard from '../../component/merchant-profile/TotalRevenueCard'
import Sidebar from '../../component/sidebar'
import PageSearch from '../../component/PageSearch'
import TotalOrderedDishesCard from '../../component/merchant-profile/TotalOrderedDishesCard'
import TotalCustomersCard from '../../component/merchant-profile/TotalCustomersCard'
import MostOrderedCard from '../../component/merchant-profile/MostOrderedCard'
import OrderReport from '../../component/merchant-profile/OrderReport'
import CurrentStatusCard from '../../component/merchant-profile/CurrentStatusCard'
const MerchantProfile=()=>{
  return (
<div class="flex  w-full ">
    <div class="flex w-1/12">
      <Sidebar class="mt-0"/>
    </div>
    <div class="flex-col w-11/12 h-screen pt-5 ml-5 p-5 mb-10 mr-5 overflow-hidden">
    <div class=" flex-col w-full">
      <div class="flex w-full">
        <div class="flex w-1/2">
            <div class="flex-col ml-3">
               <p class="text-2xl font-bold ">
                Profile
              </p>
              <p class="text-md font-semibold ">Thursday, 20 May 2023</p>
            </div>
          </div>
          <div class="flex w-1/2 justify-end ">
             <PageSearch/>
          </div>
      </div>
    </div>
    <div class="flex w-full align-top justify-between">
      <div class="flex flex-col w-2/3 p-10 justify-between">
      <div class="flex w-full">
        <TotalRevenueCard/>
         <TotalOrderedDishesCard/>
         <TotalCustomersCard/>
      </div>
       <div class="flex h-full mb-10">
            <OrderReport/>
        </div>  
      </div>
      <div class="flex flex-col  w-1/3 mt-10 mb-10 h-full">
          <MostOrderedCard/>
         
      </div>
    </div>
    
    </div>
</div>
  )
}

export default MerchantProfile