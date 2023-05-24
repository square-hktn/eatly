import React from 'react'
import { PaymentForm } from 'react-square-web-payments-sdk';

function SquarePayment() {
  return (
  <PaymentForm
    applicationId="sandbox-XXXXXX"
    cardTokenizeResponseReceived={(token, verifiedBuyer) => {
      console.log('token:', token);
      console.log('verifiedBuyer:', verifiedBuyer);
    }}
    locationId='XXXXXXXXXX'
  >
  </PaymentForm>
  )
}

export default SquarePayment