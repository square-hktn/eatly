import React from 'react'

function AddressModal() {
  return (
    <div class="confirmation_sidebar_wrapper">
    <div class="flex flex-col">
      <div class="flex flex-col mb-8">
        <div class="flex w-full">
          <p class="text-xl font-semibold">
            Address
          </p>
          <div class="flex justify-end">
            <p>x</p>
           </div>
        </div>
      <p class="text-sm font-semibold text-[#99592A]">Order #12345</p>
      </div>
    </div>
    <div class="flex w-full p-3 border-b-2 border-gray-400">
       <p class="text-sm">What so we deliver?</p>
    </div>
    
    <div class="flex w-full  pt-5 pb-5 justify-between">
        <button class="flex justify-center w-full rounded-xl border-2 border-gray-400 pt-5 pb-5">
          <p class="text-center">use GPS</p>
        </button>
    </div>
    <div class="flex w-full align-middle">
        <p class="line_text"><span>or</span></p>
    </div>
    <div class="flex flex-col w-full">
      <div class="flex flex-col w-full mt-3">
        <p>Hosue no./Apartment/Street</p>
        <input   placeholder="732" class=" border border-gray-300  sm:text-sm rounded-xl w-full flex focus:ring-primary-600 focus:border-primary-600 p-2.5  dark:border-gray-600 " required="" onChange={(e)=>{
               console.log(e)}}/>
      </div>
      <div class="flex flex-col w-full mt-3">
        <p>Locality/District/City</p>
        <input   class=" border border-gray-300  sm:text-sm rounded-xl w-full flex focus:ring-primary-600 focus:border-primary-600 p-2.5  dark:border-gray-600 " required="" onChange={(e)=>{
               console.log(e)}}/>
      </div>
      <div class="flex w-full  border-b-2 border-gray-500 justify-between pt-5 pb-10">
        <div class="flex flex-col w-1/3">
          <p class="mb-2">State</p>
          <input  class=" border border-gray-300  sm:text-sm rounded-xl w-full flex focus:ring-primary-600 focus:border-primary-600 p-2.5  dark:border-gray-600 " required="" onChange={(e)=>{
               console.log(e)}}/>
        </div>
        <div class="flex flex-col w-1/3">
          <p class="pb-2">Zipcode</p>
          <input  class=" border border-gray-300  sm:text-sm rounded-xl w-full flex focus:ring-primary-600 focus:border-primary-600 p-2.5  dark:border-gray-600 " required="" onChange={(e)=>{
               console.log(e)}}/>
          
          </div>
      </div>
      
    </div>
    <div class="flex w-full mt-15 justify-arounded">
        <button class="w-1/3 rounded-lg  text-[#99592A] border-[#99592A] border-2 p-3">
          <p class="text-[#99592A] text-center">Back</p>
        </button>
        <button class="w-1/3 rounded-lg  text-white bg-[#99592A] border-2 p-3">
          <p class="text-white text-center">Back</p>
        </button>
    </div>

  </div>
  )
}

export default AddressModal