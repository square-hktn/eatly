import React from 'react'
import { useState } from 'react'
function PaymentModal() {


  const [creditCard,setCreditCard]=useState(false)
  const[paypal,setPaypal]=useState(false)
  const[cash,setCash]=useState(false)
  return (
    <div class="address_modal">
    <div class="confirmation_sidebar_wrapper">
      <div class="flex-col">
        <div class=" flex-col">
       <div class="flex w-full">
         <div class="flex w-1/2">
              <p class="text-2xl font-semibold text-start">Payment</p>
          </div>
          <div class="flex w-1/2 justify-end">
            <p class="font-bold text-xl text-end">x</p>
          </div>
       </div>
       <p class="text-md font-semibold text-[#99592A]">Order #12345</p>
      </div>


      <div class="flex w-full justify-start mt-10">
         <p class="font-bold text-start mb-3">How would you like to pay?</p>
      </div>
      <div class="flex  border-t-2 border-gray-400 pt-8 pr-5">
        <div class="flex n w-5/6 justify-start ">
          {creditCard?
          <div class="payment-modal-payment-options-box-selected mr-2">
              <div class="flex w-full justify-end">
                <img src={require("../../assets/checkmark-circle.png")} alt="check"/>
              </div>
             <div class="flex justify-center"onClick={()=>{
              setCreditCard(true)
              setPaypal(false)
              setCash(false)
             }}>
               <img src={require("../../assets/creditcard.png")} alt="creditcard"/>
             </div>
             <p class="text-sm text-center font-semibold">Credit Card</p>
          </div>:
          <div class="payment-modal-payment-options-box mr-2" onClick={()=>{
            setCreditCard(true)
            setPaypal(false)
            setCash(false)
           }}>
              <div class="flex justify-center">
               <img src={require("../../assets/creditcard.png")} alt="creditcard"/>
             </div>
             <p class="text-sm font-semibold text-gray-400">Credit Card</p>
           </div>
          }
          {paypal?
          <div class="payment-modal-payment-options-box-selected mr-2">
              <div class="flex w-full justify-end">
                <img src={require("../../assets/checkmark-circle.png")} alt="check"/>
              </div>
             <div class="flex justify-center"onClick={()=>{
              setPaypal(true)
              setCreditCard(false)
              setCash(false)
             }}>
               <img src={require("../../assets/paypal.png")} alt="paypal"/>
             </div>
             <p class="text-sm text-center font-semibold">Paypal</p>
          </div>:
          <div class="payment-modal-payment-options-box mr-2" onClick={()=>{
            setPaypal(true)
            setCreditCard(false)
            setCash(false)
           }}>
              <div class="flex justify-center">
               <img src={require("../../assets/paypal.png")} alt="paypal"/>
             </div>
             <p class="text-sm text-center font-semibold text-gray-400">Paypal</p>
           </div>
          }
          {cash?
          <div class="payment-modal-payment-options-box-selected mr-2">
              <div class="flex w-full justify-end">
                <img src={require("../../assets/checkmark-circle.png")} alt="check"/>
              </div>
             <div class="flex justify-center"onClick={()=>{
                setCash(true)
                setPaypal(false)
                setCreditCard(false)
             }}>
               <img src={require("../../assets/wallet.png")} alt="paypal"/>
             </div>
             <p class="text-sm text-center font-semibold">Cash</p>
          </div>:
          <div class="payment-modal-payment-options-box mr-2" onClick={()=>{
            setCash(true)
            setPaypal(false)
            setCreditCard(false)
           
           }}>
              <div class="flex justify-center">
               <img src={require("../../assets/wallet.png")} alt="paypal"/>
             </div>
             <p class="text-sm text-center font-semibold text-gray-400">Cash</p>
           </div>
          }
        </div>
      </div> 
        <div class="flex flex-col mt-10">
          <p class="text-start font-semibold">Cardholder Name</p>
          <input type="text" class="address-modal-input mt-2" placeholder="Jane Doe" required/>
        </div>
        <div class="flex flex-col mt-5">
          <p class="text-start font-semibold">Card Number</p>
          <input type="text" class="address-modal-input mt-2" placeholder="1234 **** **** ****" required/>
        </div>
        <div class="flex w-full  justify-between pt-5 pb-10 ">
        <div class="flex flex-col w-1/2 mr-2">
            <p class="mb-2 font-semibold">Expiration Date</p>
            <input  class="address-modal-input-small"pattern="\d*" required="" placeholder="05/2023"/>
         </div>
        <div class="flex flex-col w-1/2 ">
            <p class="pb-2 font-semibold">CVV</p>
            <input  class="address-modal-input-small"pattern="\d*"type="number"placeholder="" required="" />
      </div>
  </div>
  <div class="flex w-full justify-between  bottom-0">
    <div class=" w-1/2 ml-2">
    <button class="address-modal-back-button">
      <p class="text-[#99592A] text-center font-semibold">Cancel</p>
    </button>
   </div>
    <div class="w-1/2 ">
      <button class="address-modal-payment-button">
        <p class="text-white text-center font-semibold">Confirm Payment</p>
      </button>
     </div>
    </div>
      </div>
    </div>
    </div>
  )
}


export default PaymentModal


