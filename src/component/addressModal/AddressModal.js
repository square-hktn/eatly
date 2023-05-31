import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./AddressModal.module.scss";

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
    const errors = validate(formValues);
    setFormError(errors);
    setIsButtonDisabled(Object.keys(errors).length > 0);
  }, [formValues]);

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

  return (
    <>
      <ToastContainer />
      <div className={styles.address_modal}>
        <div className={styles.modal_container}>
          <div className={styles.addressHeader}>
            <div className={styles.addressHeaderLeft}>
              <h3 className={styles.confirmHeaderText}>Address</h3>
              <label className={styles.confirmText}> Order #12345</label>
            </div>

            <p
              className={styles.confirmCloseIcon}
              onClick={(e) => handleShowModal(e)}
            >
              x
            </p>
          </div>

          <div className={styles.modal_body}>
            <p className={styles.title}>Where do we deliver?</p>
            <div className={styles.ruler} />
          </div>
          <form onSubmit={handlesubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <div>
                <label className={styles.address_label}>House No./Street</label>
                <input
                  className={styles.address_input}
                  name="street"
                  value={formValues.street}
                  onChange={handleChange}
                />
                <div className="errorMsg">
                  {touched.street && formError.street}
                </div>
              </div>

              <div>
                <label className={styles.address_label}>
                  Locality/District/City
                </label>
                <input
                  className={styles.address_input}
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
                />
                <div className="errorMsg">{touched.city && formError.city}</div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <div>
                <label className={styles.address_label}>State</label>
                <input
                  className={styles.address_input}
                  name="state"
                  value={formValues.state}
                  onChange={handleChange}
                />
                <div className="errorMsg">
                  {touched.state && formError.state}
                </div>
              </div>
              <div>
                <label className={styles.address_label}>Zipcode</label>
                <input
                  className={styles.address_input}
                  value={formValues.zipCode}
                  onChange={handleChange}
                  name="zipCode"
                />
                <div className="errorMsg">
                  {touched.zipCode && formError.zipCode}
                </div>
              </div>
            </div>

            <div className={styles.btn_container}>
              <div>
                <button
                  className={styles.address_back_button}
                  onClick={(e) => handleShowModal(e)}
                >
                  Back
                </button>
              </div>
              <div>
                <button
                  className={styles.payment_button}
                  type="submit"
                  disabled={isButtonDisabled}
                >
                  {isLoading ? (
                    <div aria-label="Loading..." role="status">
                      <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
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
          </form>
        </div>
      </div>
    </>
  );
}

export default AddressModal;
