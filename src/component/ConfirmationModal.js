import React from 'react'
import MealCard from './confirm_modal_components/MealCard'

function ConfirmationModal () {
  return (
    <div class="confirmation_sidebar_wrapper">
      <div class="flex flex-col">
        <div class="flex flex-col mb-8">
          <div class="flex w-full">
            <p class="text-xl font-semibold">
              Confirmation
            </p>
            <div class="flex justify-end">
              <p>x</p>
             </div>
          </div>
        <p class="text-sm font-semibold text-[#99592A]">Order #12345</p>
        </div>
      </div>

      <div class="flex w-full p-2 border-b border-gray-700 justify-between">
        <tr class="w-full flex">
          <th class="flex w-3/4">Item</th>
          <th class="flex w-1/6">Qty</th>
          <th class="flex w-1/6">Price</th>
        </tr>
      </div>

      <div class="flex flex-col border-gray-400  pt-3 pb-8 border-b-2">
        <MealCard/>
        <MealCard/>
       
       
        
      </div>
      <div class="flex flex-col mt-10">
        <p>Optional promo code</p>
        <div class="flex justify-between mt-4">
          <input class="border-b-xl p-2 w-3/4 flex rounded-xl  border-gray-400 border-2" type="text" placeholder="Enter the code"/>
          <button class="bg-[#99592A] rounded-xl p-2">
            <p class="text-white">
              Apply
            </p>
          </button>
        </div>
        <div class="flex flex-col mt-8">
          <div class="flex justify-between mb-3">
            <p>Discount</p>
            <p>$0</p>
          </div>
          <div class="flex justify-between ">
            <p>Sub Total</p>
            <p>$21.03</p>
          </div>
        </div>
        <div class="flex justify-center p-5">
          <button class="bg-[#99592A] rounded-xl p-2 justify-center">
            <p class="text-white">Next</p>
          </button>
        </div>
      </div>

    </div>
  )
}

export default ConfirmationModal