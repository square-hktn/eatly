import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddressModal(props) {
  const [formValues, setFormValues] = useState({
    street: "",
    city: "",
    zipCode: "",
    state: "",
  });
  const [touched, setTouched] = useState({});
  //error
  const [formError, setFormError] = useState({});
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Button disabled state
  const [isLoading, setIsLoading] = useState(false);

  const validate = (values) => {
    const errors = {};

    if (!values.state) {
      errors.state = "State name is required";
    }

    if (!values.street) {
      errors.street = "Street name is required";
    }
    if (!values.zipCode) {
      errors.zipCode = "zipCode is required";
    }

    if (!values.city) {
      errors.city = "City name is required";
    }

    return errors;
  };

  useEffect(() => {
    validate(formValues);
    setFormError(validate(formValues));
    setIsButtonDisabled(Object.keys(formError).length > 0); // Disable button if there are form errors
  }, [formValues, touched, formError]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    setTouched((prevState) => ({
      ...prevState,
      [e.target.name]: true,
    }));
  };

  const { street, city, zipCode, state } = formValues;

  const handlesubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formError).length > 0) {
      setTouched({
        street: true,
        city: true,
        state: true,
        zipCode: true,
      });
    }

    if (Object.keys(formError).length === 0) {
      setTouched({
        state: false,
        city: false,
        street: false,
        zipCode: false,
      });
      setIsLoading(true);

      props.setAddress({
        street,
        city,
        zipCode,
        state,
      });
      props.setShow(false);
      toast.success("Information received success");
      props.setShowPaymentModal(true);
    }
  };
  const handleShowModal = () => {
    props.setShow(false);
  };

  const handleback = () => {
    props.setShow(false);
  };

  return (
    <>
      <ToastContainer />
      <div className="address_modal">
        <div className="confirmation_sidebar_wrapper">
          <div className="flex w-full justify-start  flex-col mt-2">
            <div className="flex w-full h-36">
              <div className="flex flex-col justify-start w-1/2">
                <p className="text-2xl font-semibold">Address</p>
                <p className="font-semibold  text-start text-[#99592A]">
                  Order #12345
                </p>
              </div>
              <div className="flex justify-end w-1/2">
                <button
                  className="close-btn "
                  onClick={(e) => handleShowModal(e)}
                >
                  <p className="font-semibold text-2xl">x</p>
                </button>
              </div>
            </div>

            <p className="font-bold text-start mt-5 h-14">
              Where do we deliver?
            </p>
            <div className="flex flex-col w-full border-t-2 border-gray-400" />
            <form onSubmit={handlesubmit} className="mt-5">
              <div className="flex flex-col w-full mt-2">
                <p className="address_label">House no./Apartment/Street</p>
                <input
                  placeholder="Enter your street name"
                  className="address-modal-input "
                  name="street"
                  value={formValues.street}
                  onChange={handleChange}
                />
                <div className="errorMsg">
                  {touched.street && formError.street}
                </div>
              </div>

              <div className="flex flex-col w-full mt-6">
                <p className="address_label">Locality/District/City</p>
                <input
                  className="address-modal-input "
                  placeholder="Enter your city name"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                />
                <div className="errorMsg">{touched.city && formError.city}</div>
              </div>

              <div className="flex w-full justify-between pt-5 pb-10 ">
                <div className="flex flex-col w-1/2  mr-2">
                  <p className="address_label">State</p>
                  <input
                    className="address-modal-input-small"
                    placeholder="Enter your state"
                    name="state"
                    value={formValues.state}
                    onChange={handleChange}
                  />
                  <div className="errorMsg">
                    {touched.state && formError.state}
                  </div>
                </div>
                <div className="flex flex-col w-1/2">
                  <p className="address_label">Zipcode</p>
                  <input
                    className="address-modal-input-small "
                    value={formValues.zipCode}
                    onChange={handleChange}
                    name="zipCode"
                  />
                  <div className="errorMsg">
                    {touched.zipCode && formError.zipCode}
                  </div>
                </div>
              </div>
              <div className="flex w-full">
                <div className="flex  justify-around">
                  <div>
                    <button
                      className="address-modal-back-button mr-2"
                      onClick={handleback}
                    >
                      Back
                    </button>
                  </div>
                  <div>
                    <button
                      className="address-modal-payment-button"
                      type="submit"
                      disabled={isButtonDisabled}
                    >
                      {isLoading ? (
                        <div aria-label="Loading..." role="status">
                          <svg
                            className="h-6 w-6 animate-spin"
                            viewBox="3 3 18 18"
                          >
                            <path
                              className="fill-gray-200"
                              d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                            ></path>
                            <path
                              className="fill-gray-800"
                              d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                            ></path>
                          </svg>
                        </div>
                      ) : (
                        "Continue"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressModal;
