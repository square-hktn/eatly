import React, { useEffect, useState } from "react";
import styles from "./SquarePayment.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
import { axiosInstance } from "../../api";
import { squareApplicationId, squareLocationId, baseUrl } from "../../config";
import { useHistory } from "react-router-dom";

const MyPaymentForm = (props) => {
  const [familyName, setFamilyName] = useState("");
  const [givenName, setGivenName] = useState("");
  const navigate = useHistory();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    axiosInstance
      .get(`${baseUrl}/user/${userId}`)
      .then((response) => {
        const name = response.data.data.name;
        setFamilyName(name.split[1]);
        setGivenName(name.split[0]);
      })
      .catch((err) => {
        console.log(err);
        toast.error("User query failed");
        props.setShowPaymentModal(false);
      });
  }, []);

  const handleCardTokenizeResponse = async (token, buyer) => {
    const userCart = localStorage.getItem("userCart");
    let cartData = [];
    if (userCart) {
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
          name: v.name,
          sumTotal:
            (v.cost * v.qty) % 1 === 0
              ? v.cost * v.qty + 0.5
              : (v.cost * v.qty).toFixed(2),
          unitCost: v.cost,
          url: v.url,
          restaurantName: v.restaurantName,
        };
      }),
      totalCost: props.subTotal,
    };

    try {
      await axiosInstance.post(`${baseUrl}/order`, body);
      toast.success("Payment successful");
      console.log("success")
      props.setShowPaymentModal(false);
      localStorage.removeItem("userCart");
      setTimeout(() => {
                navigate.push("/orders");
              }, 2000);
      

      // Handle successful tokenization
      // You can make an API call to your server to process the payment using the token
    } catch (error) {
      console.log(error)
      toast.error("Try again");
      // Handle tokenization error
      // Display an error message to the user or take appropriate action
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
