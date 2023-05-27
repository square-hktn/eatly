import React from 'react'

function MostOrderedMealCard() {
  return (
    <div class="flex w-full">
      <div class="flex w-1/6 mb-5">
        <img src={require("../../assets/Image6.png")} alt="dish"/>
      </div>
      <div class="ml-5 flex flex-col w-full">
        <p class="text-md font-semibold">Spicy seasoned seafood noodles</p>
        <p class="text-gray-400 text-sm">6 times ordered</p>

      </div>
    </div>
  )
}

export default MostOrderedMealCard