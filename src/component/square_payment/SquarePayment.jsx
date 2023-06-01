import React, { useEffect, useState } from "react";
import styles from "./SquarePayment.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { axiosInstance } from "../../api";
import { squareApplicationId, squareLocationId, baseUrl } from "../../config";

const MyPaymentForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [familyName, setFamilyName] = useState('');
  const [givenName, setGivenName] = useState('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axiosInstance.get(`${baseUrl}/user/${userId}`)
      .then((response) => {
        const name = response.data.data.name;
        setFamilyName(name.split[1]);
        setGivenName(name.split[0]);
      })
      .catch((err) => {
        toast.error("User query failed");
        props.setShowPaymentModal(false);
      })
  }, []);

  const handleCardTokenizeResponse = async (token, buyer) => {
    setIsLoading(true);
    const userCart = localStorage.getItem('userCart');
    let cartData = [];
    if(userCart) {
      cartData = JSON.parse(userCart);
    }

    const body = {
      payment: {
        sourceId: token.token,
        idempotencyKey: crypto.randomUUID(),
      },
      address: props.address,
      products: cartData.map((v) => {
        return {
          id: v.id,
          qty: v.qty,
          sumTotal: ((v.cost * v.qty) % 1 === 0) ? (v.cost * v.qty) + .5 : (v.cost * v.qty).toFixed(2),
          unitCost: v.cost,
        }
      }),
      totalCost: props.subTotal
    };

    try {
      await axiosInstance.post(
        `${baseUrl}/order`,
        body
      );
      toast.success("Payment successful");
      setIsLoading(false);
      props.setShowPaymentModal(false);
      // Handle successful tokenization
      // You can make an API call to your server to process the payment using the token
    } catch (error) {
      toast.error("Try again");
      // Handle tokenization error
      // Display an error message to the user or take appropriate action
    } finally {
      setIsLoading(false);
    }
  };

  const handleCardTokenizeError = (error) => {
    // Handle tokenization error
    // Display an error message to the user or take appropriate action
    toast.error("Try again");
  };

  const cancel = () => {
    props.setShowPaymentModal(false);
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.modal}>
        <div className={styles.modal_content}>
          <div className={styles.btn_container}>
            <button onClick={() => cancel()} className={styles.close_btn}>
              x
            </button>
          </div>
          {isLoading && (
            <div aria-label="Loading..." role="status" className="h-12 w-12">
              <svg className=" animate-spin h-10 w-10" viewBox="3 3 18 18">
                <path
                  className="fill-slate-100"
                  d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                ></path>
                <path
                  className="fill-slate-300"
                  d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                ></path>
              </svg>
            </div>
          )}
          {/* Render the spinner animation */}
          <PaymentForm
            applicationId={squareApplicationId}
            cardTokenizeResponseReceived={handleCardTokenizeResponse}
            cardTokenizeErrorReceived={handleCardTokenizeError}
            createVerificationDetails={() => ({
              amount: props.subTotal,
              billingContact: {
                addressLines: [props.address.street],
                familyName,
                givenName,
                countryCode: "GB",
                city: props.address.city,
              },
              currencyCode: "USD",
              intent: "CHARGE",
            })}
            locationId={squareLocationId}
          >
            <CreditCard
              buttonProps={{
                css: {
                  backgroundColor: "#99592a",
                  fontSize: "16px",
                  color: "#fff",
                  fontWeight: "600px",
                  "&:hover": {
                    backgroundColor: "#2a160c",
                  },
                  "&:active": {
                    backgroundColor: "#2a160c",
                  },
                  "&:disabled": {
                    backgroundColor: " #989795",
                    color: "white",
                  },
                },
              }}
              placeholder="Enter credit card details"
            />
          </PaymentForm>
        </div>
      </div>
    </>
  );
};

export default MyPaymentForm;
