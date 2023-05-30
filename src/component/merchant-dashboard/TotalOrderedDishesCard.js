import React from 'react'

function TotalOrderedDishesCard() {
  return (
    <div class="merchant-profile-total-ordered-card">
      <div class="flex w-full justify-between">
        <div class="flex w-1/2 jsutify-start">
          <img src={require("../../assets/tab.png")} alt="tab"/>
          <div class="flex w-1/2"></div>
        </div>
        <div class="flex w-1/2 justify-end">
          <p class="text-red-700 text-end font-semibold">
            -12.00%
          </p>
          <img src={require("../../assets/red-arrow.png")} alt="red-arrow"/>
        </div>
      </div>
      <div class="flex w-full mt-6">
          <div class="flex w-3/4">
            <p class="text-xl font-bold text-start pt-3">6,000</p>
          </div>
        </div>
        <p class="text-gray-400 text-sm">Total Customers</p>
    </div>
  )
}

export default TotalOrderedDishesCard