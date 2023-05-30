
import React from 'react'
import MealCard from './MealCard'


function ConfirmationModal () {


  const numMeals=5
  return (
    <div className="address_modal">
      <div className="confirmation_sidebar_wrapper">
 
      <div className="flex w-full justify-start  flex-col mt-2">
        <div className="flex w-full">
          <div className="flex flex-col justify-start w-1/2">
            <p className="text-2xl font-semibold">Confirmation</p>
            <p className="font-semibold  text-start text-[#99592A] ">
              Italian Place | Order #12345
            </p>
          </div>
          <div className="flex justify-end w-1/2">
            <button className="close-btn " >
             <p class="font-semibold text-2xl">x</p>
            </button>
          </div>
      </div>


     
      <tr class="flex w-full justify-start ">
        <th class="flex w-2/3 justify-start">
          <p class="text-start">Item</p>
        </th>
        <th class="flex w-1/6">
            <p class="text-center">Qty</p>
        </th>
        <th class="flex w-1/6">
            <p class="text-center">price</p>
        </th>
      </tr>
      {
        numMeals>2?
        <div class="flex-col w-full h-[60%] overflow-hidden overflow-y-scroll border-t-2 border-black p-3">
          <MealCard/>
          <MealCard/>
          <MealCard/>
         
       
        </div>:
        <div class="flex w-full">
          <div class="flex flex-col w-full">
            <MealCard/>
          </div>
        </div>
      }
   
          <div className="flex flex-col w-full border-t-2 border-gray-400" />
        <div class="flex w-full mt-12">
        <div className="flex  justify-around ">
            <div>
         
            </div>
            <div>
              <button className="address-modal-payment-button" type="submit">
                Back
              </button>
            </div>
          </div>
        </div>
        </div>
     
      </div>
    </div>
   
   
  )
}

export default ConfirmationModal