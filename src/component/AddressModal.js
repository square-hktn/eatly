import { useState } from "react";
import { useHistory } from "react-router-dom";

function AddressModal(props) {
  const navigate = useHistory();
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    props.setAddress({
      street,
      city,
      zipCode,
      state,
    });
    props.setShow(false);
    props.setShowPaymentModal(true);
    
  };

  const handleShowModal = () => {
    props.setShow(false);
  };

  const handleback = () => {
    navigate.push("/dashboard");
  };
  return (
    <div className="address_modal">
      <div className="confirmation_sidebar_wrapper">
        <div className="flex flex-row items-center">
          <div className="flex justify-center w-32">
            <p className="text-3xl font-semibold text-center">Address</p>
          </div>
          <div className="flex justify-end w-64">
            <button className="close-btn " onClick={(e) => handleShowModal(e)}>
              x
            </button>
          </div>
        </div>

        <p className="font-semibold text-lg text-[#99592A] text-center mt-2">
          Order #12345
        </p>

        <div className="flex w-full justify-start mt-5 flex-col">
          <p className="font-bold text-start mb-3">Where do we deliver?</p>
          <div className="flex flex-col w-full border-t-2 border-gray-400" />
        </div>
        <form onSubmit={handlesubmit}>
          <div className="flex flex-col w-full mt-6">
            <p className="address_label">House no./Apartment/Street</p>
            <input
              placeholder="732"
              className="address-modal-input "
              required=""
              name="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>

          <div className="flex flex-col w-full mt-6">
            <p className="address_label">Locality/District/City</p>
            <input
              className="address-modal-input "
              required=""
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="flex w-full  justify-between pt-5 pb-10 ">
            <div className="flex flex-col w-1/2 mr-2">
              <p className="address_label">State</p>
              <input
                className="address-modal-input-small"
                required=""
                name="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-1/2">
              <p className="address_label">Zipcode</p>
              <input
                className="address-modal-input-small "
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                name="zipCode"
              />
            </div>
          </div>
          <div className="address-modal-button-container">
            <div>
              <button
                className="address-modal-back-button"
                onClick={handleback}
              >
                Back
              </button>
            </div>
            <div>
              <button className="address-modal-payment-button" type="submit">
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddressModal;
