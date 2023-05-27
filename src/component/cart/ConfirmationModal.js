import React from 'react'
import MealCard from './MealCard'

function ConfirmationModal () {

  const numMeals=2
  return (
    <div class="confirmation_sidebar_wrapper">
      <div class="flex flex-col">
        <div class="flex flex-col mb-8">
          <div class="flex w-full">
            <div class="flex w-1/2">
              <p class="text-3xl font-semibold">
              Confirmation
              </p>
            </div>
            <div class="flex w-1/2 justify-end">
              <p class="text-end font-bold text-xl">x</p>
            </div> 
          </div>
          <p class="text-md font-semibold text-[#99592A]">Italian Place | Order #12345</p>
        </div>
      </div>

      <div class="flex w-full p-2 border-b border-gray-700 justify-between">
        <tr class="w-full flex">
          <th class="flex w-3/4">Item</th>
          <th class="flex w-1/6">Qty</th>
          <th class="flex w-1/6  justify-end"><p class="text-end">Price</p></th>
        </tr>
      </div>


      {
        numMeals>2?
        <div class="flex flex-col border-gray-400   pb-8 border-b-2 h-[80%] overflow-y-scroll overflow-hidden">
            <MealCard/>
            <MealCard/>
        
      </div>:
       <div class="flex flex-col border-gray-400   pb-8 border-b-2 h-[80%] ">
          <MealCard/>
          <MealCard/>
       
     </div>
      }
      <div class="flex flex-col mt-3 p-2">
        <p class="font-semibold">Optional promo code</p>
        <div class="flex  mt-4">
          <input class="confirmation-modal-promo-code-input" type="text" placeholder="Enter the code"/>
          <button class="confirmation-modal-promo-button">
            <p class="text-white  font-semibold">
              Apply
            </p>
          </button>
        </div>
        <div class="flex flex-col mt-8">
          <div class="flex justify-between mb-3">
            <p>Discount</p>
            <p class="font-bold">$ 0</p>
          </div>
          <div class="flex justify-between ">
            <p >Sub Total</p>
            <p class="font-bold">$ 21.03</p>
          </div>
        </div>
        <div class="flex justify-center p-5">
          <button class="confirmation-modal-next-button">
            <p class="text-white font-semibold">Next</p>
          </button>
        </div>
      </div>

    </div>
  )
}

export default ConfirmationModal