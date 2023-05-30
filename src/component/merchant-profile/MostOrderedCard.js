import React from "react";
import MostOrderedMealCard from "./MostOrderedMealCard";

function MostOrderedCard() {
  const numMeals = 7;
  return (
    <div class='merchant-profile-card-container '>
      <div class='w-full flex mt-4  border-b-2 border-gray-500 pb-4'>
        <div class='flex w-1/2'>
          <p class='text-xl font-bold'>Most ordered</p>
        </div>
        <div class='flex w-1/2 justify-end'>
          <select class='merchant-profile-card-select'>
            <option value='Today'>Today</option>
          </select>
        </div>
      </div>
      {numMeals > 2 ? (
        <div class='flex flex-col border-gray-400   p-5 h-[40vh] overflow-y-scroll overflow-hidden mt-5'>
          <MostOrderedMealCard />
          <MostOrderedMealCard />
          <MostOrderedMealCard />
          <MostOrderedMealCard />
        </div>
      ) : (
        <div class='flex flex-col border-gray-400   pb-8  h-[40%] mt-5 '>
       <MostOrderedMealCard />
       <MostOrderedMealCard />
        </div>
      )}
    </div>
  );
}

export default MostOrderedCard;
