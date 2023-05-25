<div class="confirmation_sidebar_wrapper">
<div class="flex flex-col">
  <div class="flex flex-col mb-8">
    <div class="flex w-full">
      <p class="text-3xl font-semibold">
        Address
      </p>
      <div class="flex w-full justify-end">
        <p class="text-xl font-bold">x</p>
       </div>
    </div>
  <p class="font-semibold text-[#99592A]">Order #12345</p>
  </div>
</div>
<div class="flex w-full justify-start mt-5">
   <p class="font-semibold text-start mb-3">Where do we deliver?</p>
</div>

<div class="flex flex-col w-full border-t-2 border-gray-400">
  <div class="flex flex-col w-full mt-6">
    <p>House no./Apartment/Street</p>
    <input   placeholder="732" class="address-modal-input " required="" onChange={(e)=>{
           console.log(e)}}/>
  </div>
  <div class="flex flex-col w-full mt-6">
    <p>Locality/District/City</p>
    <input   class="address-modal-input " required="" onChange={(e)=>{
           console.log(e)}}/>
  </div>
  <div class="flex w-full  justify-between pt-5 pb-10">
    <div class="flex flex-col w-1/2 m-2">
      <p class="mb-2">State</p>
      <input  class="address-modal-input-small " required="" onChange={(e)=>{
           console.log(e)}}/>
    </div>
    <div class="flex flex-col w-1/2 m-2 ">
      <p class="pb-2">Zipcode</p>
      <input  class="address-modal-input-small " required="" onChange={(e)=>{
           console.log(e)}}/>
      
      </div>
  </div>
  
</div>
<div class="address-modal-button-container w-4/5 ">
<div class="flex w-full justify-between p-5  bottom-0">
    <div class=" w-3/5 m-2">
    <button class="address-modal-back-button">
      <p class="text-[#99592A] text-center font-semibold">Back</p>
    </button>
   </div>
    <div class="w-full m-2">
      <button class="address-modal-payment-button">
        <p class="text-white text-center font-semibold">Continue to Payment</p>
      </button>
     </div>
</div>
</div>




</div>


