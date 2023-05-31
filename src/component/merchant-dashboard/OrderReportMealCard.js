import React from 'react'

function OrderReportMealCard() {

  const meal={
    price:3.99,
    title:"spicy seasones seafood",
    status:"completed"
  }
  return (
    <div class="flex flex-col w-full mb-5 ">
    <div class="flex w-full text-base font-medium text-gray-900 mb-5 ">
        <div class="flex w-1/4 ml-2 justify-start ">
            <p class="ml-4">#12346</p>
        </div>
        <div class="flex w-1/4 ml-2 justify-center">
           {meal.title.substring(0,20)}
        </div>
        <div class="flex w-1/4 justify-center ">
           <p class="text-center"> $ {meal.price}</p>
        </div>
        <div class="flex w-1/4 p-3">
         {
          meal.status=="completed"?
          <div class="flex  bg-green-300 rounded-md  p-2 justify-center rounded-border">
          <p class="text-green-800 text-sm">Completed</p>
        </div>
        :
        <div>
        </div>
         }
          {
          meal.status=="preparing"?
          <div class="flex rounded-border bg-orange-300  rounded-md  p-2 justify-center">
          <p class="text-orange-800 text-sm">Preparing</p>
        </div>
        :
        <div>
        </div>
         }
           {
          meal.status=="cancelled"?
          <div class="flex rounded-border bg-red-300  rounded-md  p-2 justify-center">
          <p class="text-red-800 text-sm">Preparing</p>
        </div>
        :
        <div>
        </div>
         }
           {
          meal.status=="pending"?
          <div class="flex rounded-border bg-purple-300  rounded-md  p-2 justify-center">
          <p class="text-purple-800 text-sm">Pending</p>
        </div>
        :
        <div>
        </div>
         }
        </div>
       </div>  
      
  </div>
  )
}

export default OrderReportMealCard