import React from 'react'

function MealCard() {
  const meal={
    title:"Spicy seasoned seafood ramen",
    price:2.29,
  }
  
  return (
    <div class="flex flex-col w-full mb-5 p-2">
    <div class="flex justify-between text-base font-medium text-gray-900 mb-5">
        <div class="flex w-7/12">
          <div class="flex w-1/3">
            <img src={require("../assets/Image6.png")} alt="pizza"/> 
          </div>
          <div class="flex flex-col w-2/3 ml-2">
            <div class="flex flex-col">
              <p class="text-sm">
                {meal.title.substring(0,15)}...
              </p>
            </div>
            <div class="flex flex-col">
              
              <p class="text-xs text-gray-400">
                 $ 2.29
              </p>
            </div>

          </div>
        </div>
        <div class="flex w-1/8 justify-start">
           <p class="text-start">1</p> 
        </div>
        <div class="flex w-1/8 justify-start">
          <p class="text-start">$ {meal.price}</p> 
        </div>
       </div>  
       <div class="flex justify-between">
         <input type="text" class="mealcard-input" placeholder="Please, just a little spicy"/>
       
       </div>
       
     
  </div>
  )
}


export default MealCard

