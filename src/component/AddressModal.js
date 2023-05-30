import { useState } from "react";
import { useHistory } from "react-router-dom";

function AddressModal(props) {
  const navigate = useHistory();
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [other,setOther]=useState(true)
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
  if(other==false){
    return(
      <div class="address_modal">
      <div class="confirmation_sidebar_wrapper">
      <div class="flex flex-col">
          <div class="flex w-full justify-end  overflow-hidden font-bold ">
            <p class="text-end text-lg font-bold">x</p>
          </div>
          <div class="flex w-full overflow-hidden">
            <div class="flex flex-col w-full justify-start overflow-hidden">
                <p class="text-2xl font-bold">Address</p>
                <p class="font-semibold text-lg text-[#99592A]">Order #12345</p>
            </div>
          </div>
      <div class="flex w-full justify-start mt-5">
         <p class="font-bold text-start mb-3">Where do we deliver?</p>
      </div>
      <div class="flex flex-col w-full border-t-2 border-gray-400">
        <div class="flex flex-col w-full mt-6 overflow-hidden">
          <p class="mb-3">House no./Apartment/Street</p>
          <input   placeholder="732" class="address-modal-input " required=""/>
        </div>
        <div class="flex flex-col w-full mt-6">
          <p class="mb-3">Locality/District/City</p>
          <input   class="address-modal-input " required=""/>
        </div>
        <div class="flex w-full  justify-between pt-5 pb-10 ">
          <div class="flex flex-col w-1/2 mr-2">
            <p class="mb-2">State</p>
            <input  class="address-modal-input-small " required="" />
          </div>
          <div class="flex flex-col w-1/2  ">
            <p class="pb-2">Zipcode</p>
            <input  class="address-modal-input-small " required="" />
            </div>
        </div>
      </div>
      <div class="address-modal-button-container w-5/6 ">
      <div class="flex w-full justify-between  bottom-0">
          <div class=" w-1/2 ml-2">
          <button class="address-modal-back-button">
            <p class="text-[#99592A] text-center font-semibold text-sm">Back</p>
          </button>
         </div>
          <div class="w-1/2 ml-2 mb-10 ">
            <button class="address-modal-payment-button">
              <span class=" text-white text-center font-semibold text-sm">Continue to Payment</span>
            </button>
           </div>
      </div>
    </div>
    </div>
    </div>
    </div>
    )
  }else{
  return (
    <div className="address_modal">
      <div className="confirmation_sidebar_wrapper">
  
      <div className="flex w-full justify-start  flex-col mt-2">
        <div className="flex w-full">
          <div className="flex flex-col justify-start w-1/2">
            <p className="text-2xl font-semibold">Address</p>
            <p className="font-semibold  text-start text-[#99592A] ">
              Order #12345
            </p>
          </div>
          <div className="flex justify-end w-1/2">
            <button className="close-btn " onClick={(e) => handleShowModal(e)}>
             <p class="font-semibold text-2xl">x</p> 
            </button>
          </div>
      </div>

          <p className="font-bold text-start mt-12">Where do we deliver?</p>
          <div className="flex flex-col w-full border-t-2 border-gray-400" />
          <form onSubmit={handlesubmit} class="mt-5">
          <div className="flex flex-col w-full mt-2">
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

          <div className="flex w-full justify-between pt-5 pb-10 ">
            <div className="flex flex-col w-1/2  mr-2">
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
      
        </form>
        <div class="flex w-full">
        <div className="address-modal-button-container justify-around ">
            <div>
              <button
                className="address-modal-back-button mr-2"
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
        </div>
        </div>
      
      </div>
    </div>
    
  );
  }
}
/**
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
  <p class="font-semibold text-lg text-[#99592A]">Order #12345</p>
  </div>
</div>
<div class="flex w-full justify-start mt-5">
   <p class="font-bold text-start mb-3">Where do we deliver?</p>
</div>
<div class="flex flex-col w-full border-t-2 border-gray-400">
  <div class="flex flex-col w-full mt-6">
    <p class="mb-3">House no./Apartment/Street</p>
    <input   placeholder="732" class="address-modal-input " required=""/>
  </div>
  <div class="flex flex-col w-full mt-6">
    <p class="mb-3">Locality/District/City</p>
    <input   class="address-modal-input " required=""/>
  </div>
  <div class="flex w-full  justify-between pt-5 pb-10 ">
    <div class="flex flex-col w-1/2 mr-2">
      <p class="mb-2">State</p>
      <input  class="address-modal-input-small " required="" />
    </div>
    <div class="flex flex-col w-1/2  ">
      <p class="pb-2">Zipcode</p>
      <input  class="address-modal-input-small " required="" />
      </div>
  </div>
</div>
<div class="address-modal-button-container w-5/6 ">
<div class="flex w-full justify-between  bottom-0">
    <div class=" w-1/2 ml-2">
    <button class="address-modal-back-button">
      <p class="text-[#99592A] text-center font-semibold text-sm">Back</p>
    </button>
   </div>
    <div class="w-1/2 ml-2 mb-10 ">
      <button class="address-modal-payment-button">
        <span class=" text-white text-center font-semibold text-sm">Continue to Payment</span>
      </button>
     </div>
</div>
</div>
</div>
 */
export default AddressModal;
