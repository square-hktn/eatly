import React from 'react'

function MealCard() {
  const meal={
    title:"Spicy seasoned seafood ramen",
    price:2.29,
  }
  
  return (
    <div class=" w-full m3-5 overflow-hidden block">
  <div class="flex flex-col w-full mb-3 h-30px overflow-hidden ">
    <div class="flex w-full text-top font-medium text-gray-900 mb-5 ">
    <div class="flex flex-col w-2/3 justify-start p-2">
      <div class="flex  justify-start mr-4">
        <div class="flex w-1/3">
         <img src={require("../../assets/Image6.png")} alt="meal"/>
        </div>
          
        <div class="flex ">
            {meal.title.substring(0,15)}
        </div>
      </div>
      <div class="justify-start w-full">
        <input class="address-modal-input mt-3"type="text" placeholder="just a bit spicy..."/>
      </div>
    </div>
    <div class="flex w-1/6 justify-end mr-6">
      <p class="text-center">2</p>
    </div>
    <div class="flex w-1/6 justify-end mr-3 ">
      QTY
    </div>
     </div>
  </div>
</div>
  )
}


export default MealCard

