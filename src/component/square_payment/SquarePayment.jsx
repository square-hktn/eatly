
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";

const MyPaymentForm = () => {
  const handleCardTokenizeResponse = (token, buyer) => {
    console.log({ token, buyer });
    // Handle successful tokenization
    // You can make an API call to your server to process the payment using the token
  };

  const handleCardTokenizeError = (error) => {
    console.log(error);
    // Handle tokenization error
    // Display an error message to the user or take appropriate action
  };

  return (
    <PaymentForm
      applicationId=""
      cardTokenizeResponseReceived={handleCardTokenizeResponse}
      cardTokenizeErrorReceived={handleCardTokenizeError}
      createVerificationDetails={() => ({
        amount: "1000",
        billingContact: {
          addressLines: ["123 Main Street", "Apartment 1"],
          familyName: "Doe",
          givenName: "John",
          countryCode: "GB",
          city: "London",
        },
        currencyCode: "USD",
        intent: "CHARGE",
      })}
      locationId=""
    >
      <form>
        <input type="text" placeholder="name" />
        <input type="number" placeholder="amount" />
        <button>pay</button>
      </form>
      <CreditCard />
    </PaymentForm>
  );
};

export default MyPaymentForm;
