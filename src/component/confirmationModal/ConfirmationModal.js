import React, { useState } from 'react'
import styles from './confirmation.module.scss'
import ItemCard from './itemCard'

function ConfirmationModal (props) {
  const userCart = localStorage.getItem('userCart');
  let cartData = [];
  if(userCart) {
    cartData = JSON.parse(userCart);
  }

  const getSubTotal = () => {
    const userCart = localStorage.getItem('userCart');
    let cartData = [];
    if(userCart) {
      cartData = JSON.parse(userCart);
      const total = (cartData.reduce((prev, curr) => prev + (curr.qty * curr.cost), 0)).toFixed(2);
      props.setSubTotal(total);
      return total;
    }
    return 0;
  }

  const handleClose = () => {
    props.setShow(false)
  }

  const handlesubmit = () => {
    handleClose();
    props.setShowAddress(true);
  }

  return (
    <div className={styles.confirmationModalWrapper}>
      <div className={styles.confimationHeader}>
        <div className={styles.confirmHeaderSection}>
          <h3 className={styles.confirmHeaderText}>Confirmation</h3>
          <label className={styles.confirmText}>Confirm your order</label>
        </div>
        <p className={styles.confirmCloseIcon} onClick={handleClose}>x</p>
      </div>
      <div className={styles.itemSection}>
        <div className={styles.itemStrip}>
          <div className={styles.confirmItemsText}>
            <div className={styles.confirmationItemHeader}>
              <h4>Item</h4>
            </div>
            <div className={styles.confirmQtyText}>
              <h4>Qty</h4>
              <h4>Price</h4>
            </div>
          </div>
          <hr className={styles.itemCardHr}></hr>
        </div>
        {cartData.length && (
          <ItemCard
            cartItems={cartData}
          />
        )}
      </div>
      <div className={styles.promoCode}>
        <hr className={styles.itemCardHr}></hr>
        <label className={styles.promoInputLabel}>Optional promo code</label>
        <div className={styles.promoInputSection}>
          <input type='text' placeholder='Enter Promo Code' className={styles.promoInput}/>
          <button className={styles.promocodeApplyBtn}>Apply</button>
        </div>
      </div>
      <div className={styles.itemCheckout}>
        <div className={styles.itemSummary}>
          <p className={styles.itemSummaryLabel}>Discount</p>
          <p>$0</p>
        </div>
        <div className={styles.itemSummary}>
          <p className={styles.itemSummaryLabel}>Sub total</p>
          <p>${getSubTotal()}</p>
        </div>
      </div>
      <div className={styles.btnSection}>
      <button className={styles.nextBtn} disabled={getSubTotal() < 1} onClick={handlesubmit}>Next</button>
      </div>
    </div>
  )
}

export default ConfirmationModal