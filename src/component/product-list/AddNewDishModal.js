import React from 'react'

function AddNewDishModal() {
  return (
    <div className="address_modal">
    <div className="confirmation_sidebar_wrapper">

    <div className="flex w-full justify-start  flex-col mt-2">
      <div className="flex w-full">
        <div className="flex flex-col justify-start w-1/2">
          <p className="text-2xl font-semibold">Add New Dish</p>
          <p className="font-semibold  mt-0 text-start text-[#99592A] ">
            Italian Place 
          </p>
        </div>
        <div className="flex justify-end w-1/2">
          <button className="close-btn " >
           <p class="font-semibold text-2xl">x</p>
          </button>
        </div>
    </div>
 

   
    <div class="flex w-full justify-start mt-8 p-3 border-b-2 border-gray-400">
      <p class="font-bold">Add the details for the new product</p>
    </div>

    <div class="flex w-full  justify-between">
      <div class="flex w-1/2">
        <input class="add-new-dish-modal-input" type="file"/>
      </div>
      <div class="flex w-1/3">
      <button class="add-new-dish-modal-browse-button">
        <p class="text-white font-bold">Browse</p>
      </button>
      </div>
    </div>
    <div class="flex-col w-full mt-5 justify-between p-3">
      <p class="text-start mb-2 font-semibold">Product Name</p>
      <input class="very-round-border w-full flex p-3" type="text"/>
      <p class="text-start mb-2 font-semibold">Cost</p>
      <input class="very-round-border w-1/2 flex p-3" type="text"/>
    </div>
    
    <div class="flex w-full justify-center mt-20">
      <button class="very-round w-1/3 bg-gray-400 p-1">
        <p class="text-white font-semibold text-lg text-center">save</p>
      </button>
    </div>

    </div>
    </div>
  </div>
  )
}

export default AddNewDishModal