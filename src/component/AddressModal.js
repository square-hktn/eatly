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
    })
    props.setShow(false);
    props.setShowPaymentModal(true);
  };
  
  const handleShowModal = () => {
    props.setShow(false)
  }

  return (
    <div className="address_modal">
      <div className="confirmation_sidebar_wrapper">
        <div className="flex flex-col">
          <div className="flex flex-col mb-8">
            <div class="flex w-full">
              <p class="text-3xl font-semibold">Address</p>
              <div class="flex w-full justify-end">
                <p class="text-xl font-bold close-btn" onClick={(e) => handleShowModal(e)}>x</p>
              </div>
            </div>
            <p class="font-semibold text-lg text-[#99592A]">Order #12345</p>
          </div>
        </div>
        <div class="flex w-full justify-start mt-5">
          <p class="font-bold text-start mb-3">Where do we deliver?</p>
        </div>

      <form onSubmit={handlesubmit}>
        <div class="flex flex-col w-full border-t-2 border-gray-400">
            <div class="flex flex-col w-full mt-6">
              <p class="mb-3">House no./Apartment/Street</p>
              <input
                placeholder="732"
                class="address-modal-input "
                required=""
                name="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div class="flex flex-col w-full mt-6">
              <p class="mb-3">Locality/District/City</p>
              <input
                class="address-modal-input "
                required=""
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div class="flex w-full  justify-between pt-5 pb-10 ">
              <div class="flex flex-col w-1/2 mr-2">
                <p class="mb-2">State</p>
                <input
                  class="address-modal-input-small "
                  required=""
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
              </div>
              <div class="flex flex-col w-1/2  ">
                <p class="pb-2">Zipcode</p>
                <input
                  class="address-modal-input-small "
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  name="zipCode"
                />
              </div>
            </div>
          </div>
          <div class="address-modal-button-container  w-5/6">
            <div class="flex w-full justify-between  bottom-0">
              <div class=" w-3/5 ml-2">
                <button class="address-modal-back-button">
                  <p class="text-[#99592A] text-center font-semibold">Back</p>
                </button>
              </div>
              <div className="w-full ml-2 mb-10">
                <button
                  className="address-modal-payment-button"
                  type="submit"
                >
                  <p class="text-white text-center font-semibold">
                    Continue to Payment
                  </p>
                </button>
              </div>
            </div>
          </div>
      </form>
      </div>
    </div>
  );
}

export default AddressModal;
