import React from 'react'
import { PaymentForm } from 'react-square-web-payments-sdk';

//TODO:hide application id in .env file
function SquarePayment() {

  
  return (
   
       <PaymentForm
           applicationId="sandbox-sq0idb-BWmfsduo0mrV0WEUMe8h6A"
            cardTokenizeResponseReceived={(token, verifiedBuyer) => {
            console.log('token:', token);
            console.log('verifiedBuyer:', verifiedBuyer);
              }}
              locationId='XXXXXXXXXX' >
               <p class="text-xl">HELLO</p> 
  </PaymentForm>
 
 
  )
}

export default SquarePayment