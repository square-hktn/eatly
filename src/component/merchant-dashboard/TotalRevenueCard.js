import React from 'react'

function TotalRevenueCard() {
  return (
    <div class="merchant-profile-total-ordered-card">
        <div class="flex w-full">
          <div class="flex w-1/3 justify-start ">
              <img src={require("../../assets/dollar.png") } alt="dollar" class="justify-start"/>
              <div class="flex w-1/2"></div>
          </div>
          <div class="flex w-1/2 justify-end">
            <p class="text-green-600 text-end font-semibold">+32.40</p>
            <img src={require("../../assets/green-arrow.png")} alt="arrow" class="justify-end"/>
          </div>
        </div>
        <div class="flex w-full mt-6">
          <div class="flex w-3/4">
            <p class="text-xl font-bold text-start pt-3">$10,243.00</p>
          </div>
        </div>
        <p class="text-gray-400 text-md">Total Revenue</p>
    </div>
  )
}

export default TotalRevenueCard