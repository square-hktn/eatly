import React from 'react'

function MealCard() {
  const meal={
    title:"Spicy seasoned seafood ramen",
    price:2.29,
  }
  
  return (
    <div class="flex flex-col w-full mt-5 p-2">
    <div class="flex justify-between text-base font-medium text-gray-900 mb-5">
        <div class="flex w-7/12">
          <div class="flex w-1/4">
            <img src={require("../assets/Image6.png")} alt="pizza"/> 
          </div>
          <div class="flex flex-col w-3/4 ml-2">
            <div class="flex flex-col  w-full">
              <p class="text-sm">
                {meal.title.substring(0,20)}...
              </p>
            </div>
            <div class="flex flex-col w-full ">
              <p class="text-xs text-gray-400 ">
                 $ 2.29
              </p>
            </div>

          </div>
        </div>
        <div class="flex w-1/8 justify-start ">
           <p class="text-start font-bold">1</p> 
        </div>
        <div class="flex w-1/8 justify-start">
          <p class="text-start font-bold">$ {meal.price}</p> 
        </div>
       </div>  
       <div class="flex justify-between ">
         <input type="text" class="mealcard-input" placeholder="Please, just a little spicy" />
      
       </div>
       
     
  </div>
  )
}

/*
 <div class="flex flex-col mt-10">
    <tr class="flex">
      <td class="flex w-4/6">
        <div class="flex w-1/2">
            <img  class="m-2" height="4px"src={require("../../assets/Image6.png")} alt="img"/>
            <div class="flex flex-col w-full">
              <div class="flex w-1/2">
                <p class="text-sm">
                  Spicy seasoned sea...
                </p>
              </div>
              <div class="flex w-1/2">
                  <p class="text-xs text-gray-400">
                     $ 2.29
                   </p>
              </div>
            
            
            </div>
        </div>
      </td>
      
      <td class="flex w-1/6"><p class="text-sm">2</p></td>
      <td class="flex w-1/6"><p class="text-sm">$2.29</p></td>
    </tr>
    <input type="text" class="confirmation_sider_additionss" placeholder="Please,just a bit spicy."/>
    </div>
   
*/
export default MealCard

