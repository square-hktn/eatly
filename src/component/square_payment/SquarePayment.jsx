import styles from "./SquarePayment.module.scss";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import axios from "axios";

const MyPaymentForm = (props) => {
  const handleCardTokenizeResponse = async (token, buyer) => {
    console.log({ token, buyer });
    const body = {
      locationId: "LKQYD715WAF8J",
      sourceId: token.token,
      idempotencyKey: crypto.randomUUID(),
    };
    const response = await axios
      .post("https://eatly-api.onrender.com/payment", body)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
    // Handle successful tokenization
    // You can make an API call to your server to process the payment using the token
  };

  const handleCardTokenizeError = (error) => {
    console.log(error);
    // Handle tokenization error
    // Display an error message to the user or take appropriate action
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div>x</div>
        <PaymentForm
          applicationId="sandbox-sq0idb-YI3wzf4LtWsHowjjYJsTGw"
          cardTokenizeResponseReceived={handleCardTokenizeResponse}
          cardTokenizeErrorReceived={handleCardTokenizeError}
          createVerificationDetails={() => ({
            amount: "1000",
            billingContact: {
              addressLines: [props.address.street],
              familyName: "Doe",
              givenName: "John",
              countryCode: "GB",
              city: props.address.state,
            },
            currencyCode: "USD",
            intent: "CHARGE",
          })}
          locationId="LKQYD715WAF8J"
        >
          <CreditCard />
        </PaymentForm>
      </div>
    </div>
  );
};

export default MyPaymentForm;
