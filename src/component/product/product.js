import { Fragment } from 'react';
import styles from './product.module.scss';
import Header from '../header/header.page';
import ProductCard from './productCard';
import TopPicks from '../topPicks/topPicks.page';

const Product = (props) => {
  return (
    <Fragment>
      <Header/>
      <TopPicks/>
      <div className={styles.productContainer}>
        <ProductCard/>
      </div>
    </Fragment>
  )
}
export default Product;
