import { Fragment, useEffect, useState } from 'react';
import styles from './product.module.scss';
import Header from '../header/header.page';
import ProductCard from './productCard';
import TopPicks from '../topPicks/topPicks.page';
import { getHeadersWithAuth } from '../../api';

const Product = (props) => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if(products.length < 1) {
      fetch("https://eatly-api.onrender.com/product", {
        method: "GET",
        headers: getHeadersWithAuth(),
      })
      .then((response) => {
        if(response.status === 401) {
          localStorage.removeItem('token');
        }
        return response.json()
      })
      .then((resp) => {
        const data = resp.data;
        setProducts(data);
      })
      .catch((err) => {
        console.log(err, "ERROR")
      })
    }
  }, []);

  props.setItemTotal(total);

  return (
    <Fragment>
      <Header/>
      <TopPicks/>
      <div className={styles.productContainer}>
        <ProductCard
          products={products}
          setTotal={setTotal}
        />
      </div>
    </Fragment>
  )
}
export default Product;
