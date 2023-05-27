import React from 'react'
import MostOrderedMealCard from './MostOrderedMealCard'
function MostOrderedCard() {
  return (
    <div class="most-ordered-container">
      <p class="text-[#99592A] text-2xl font-semibold">Most Ordered</p>
      <p class="text-gray-400 text-sm">List of your most ordered dishes</p>
      <div class="flex flex-col mt-10">
        <MostOrderedMealCard/>
        <MostOrderedMealCard/>
        <MostOrderedMealCard/>
        <MostOrderedMealCard/>
      </div>
    </div>
  )
}

export default MostOrderedCard