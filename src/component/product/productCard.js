import { Fragment, useEffect, useState } from "react";
import styles from "./product.module.scss";
import sampleFood from "../../assets/Image6.png";
import { productData } from "./data";
import addIcon from "../../assets/Vector9.svg";

const ProductCard = (props) => {
  const products = props.products;
  let [cartItemCount, setCartItemCount] = useState(0);
  const [activeProduct, setActiveProduct] = useState(null);
  const [cart, addToCart] = useState([]);

  useEffect(() => {
    let userCart = localStorage.getItem('userCart');
    if(userCart) {
      userCart = JSON.parse(userCart);
      const qty = userCart.reduce((prev, curr) => prev + curr.qty, 0);
      props.setTotal(qty);
    } else {
      userCart = [];
    }
  })

  const isSetInCart = (productData) => {
    let userCart = localStorage.getItem('userCart');
    if(userCart) {
      userCart = JSON.parse(userCart);
    } else {
      userCart = [];
    }
    const pdt = userCart.find((v) => v.name === productData.name);
    if(pdt) {
      return {
        exists: true,
        qty: pdt.qty ?? 0
      };
    }
    return {
      exists: false,
      qty: 0
    };
  } 

  const toggleQty = (productData, action) => {
    let userCart = JSON.parse(localStorage.getItem('userCart'));
    const productIndex = userCart.findIndex((v) => v.name === productData.name);
    
    if(action === 'increase') {
      if(userCart[productIndex].qty < 10) {
        userCart[productIndex].qty = userCart[productIndex].qty + 1;
      }
    } else {
      userCart[productIndex].qty = userCart[productIndex].qty - 1;
    }

    if(userCart[productIndex].qty < 1) {
      userCart.splice(productIndex, 1);
    }
    const cartData = [
      ...userCart,
    ];
    addToCart(cartData);
    localStorage.setItem('userCart', JSON.stringify(userCart));
  }

  const getProductQty = (productData) => {
    let userCart = localStorage.getItem('userCart');
    if(userCart) {
      userCart = JSON.parse(userCart);
    } else {
      userCart = [];
    }
    const product = userCart.find((v) => productData.name === v.name);
    if(product) {
      return product.qty ?? 0;
    }
    return 0;
  }

  const handleActiveProduct = (productData) => {
    let userCart = localStorage.getItem('userCart');
    if(userCart) {
      userCart = JSON.parse(userCart);
    } else {
      userCart = [];
    }

    setActiveProduct(productData.name);
    setCartItemCount(cartItemCount);
    localStorage.setItem('cartItemCount', cartItemCount);
    const exists = isSetInCart(productData);

    if(exists.exists === false) {
      const cartData = [
        ...userCart,
        {
          name: productData.name,
          cost: productData.cost,
          restaurantName: productData.restaurantName,
          url: productData.url,
          qty: 1,
          id: productData._id
        }
      ];
      addToCart(cartData);
      localStorage.setItem('userCart', JSON.stringify(cartData));
    }
  }

  return (
    <Fragment>
      {Array.isArray(products)  &&
        products.map((info, key) => (
          <div className={styles.productCard} key={key}>
            <div className={styles.foodCircle}>
              <img
                src={info.url}
                className={styles.productImage}
                alt="product_image"
              />
            </div>
            <div className={styles.productDetails}>
              <div className={styles.productTexts}>
                <p className={styles.productName}>{info.name}</p>
                <span className={styles.spanClass}>${info.cost}</span>
              </div>
              <label className={styles.smalltitle}>{info.restaurantName}</label>
              {
                (getProductQty(info) < 1) && (
                  <div className={styles.btnSection}>
                    <img src={addIcon} className={styles.addImage} alt="add_icon" />
                    <button className={styles.cartbtn} onClick={() => handleActiveProduct(info)}>Add to Cart</button>
                  </div>
                )
              }
              {
                (getProductQty(info) > 0) && (
                  <div className={styles.cartSection}>
                    <div className={styles.cartAction} onClick={() => toggleQty(info, 'decrease')}>
                      <h4 className={styles.cartActionIcon}>-</h4>
                    </div>
                    <label>{getProductQty(info)}pcs</label>
                    <div className={styles.cartAction} onClick={() => toggleQty(info, 'increase')}>
                      <h4 className={styles.cartActionIcon}>+</h4>
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        ))}
    </Fragment>
  );
};
export default ProductCard;
