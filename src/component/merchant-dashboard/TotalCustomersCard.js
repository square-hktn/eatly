import React from 'react'

function TotalCustomersCard() {
  return (
    <div class="merchant-profile-total-ordered-card ">
    <div class="flex w-full justify-between">
      <div class="flex w-1/2 jsutify-start">
        <img src={require("../../assets/total-customers.png")} alt="tab"/>
        <div class="flex w-1/2"></div>
      </div>
      <div class="flex w-1/2 justify-end">
        <p class="text-green-700 text-end font-semibold">
          1400
        </p>
        <img src={require("../../assets/green-arrow.png")} alt="green-arrow"/>
      </div>
    </div>
    <div class="flex w-full mt-6">
        <div class="flex w-3/4">
          <p class="text-xl font-bold text-start pt-3">6,000</p>
        </div>
      </div>
      <p class="text-gray-400 text-xs pb-1 mt-1">Total Ordered Dishes</p>
  </div>
  )
}

export default TotalCustomersCard