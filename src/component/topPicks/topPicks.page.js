import { Fragment, useState } from "react";
import { restaurants } from "../product/data";
import styles from './topPicks.module.scss';
import downArrow from '../../assets/arrow-ios-down.svg';

const TopPicks = () => {
const [selectedRestaurant, setSelectedRestaurant] = useState(restaurants[0]);
  return (
    <Fragment>
      <div className={styles.filters}>
        <div className={styles.filterSection}>
          {
            Array.isArray(restaurants) && restaurants.map((info, key) => (
              <div className={styles.restaurantSection} key={key} onClick={() => setSelectedRestaurant(info)}>
                <span className={styles.restaurantName}>{info}</span>
                <div className={(selectedRestaurant === info) ? styles.active : ''}></div>
              </div>
            ))
          }
        </div>
        <div className={styles.filterDropDown}>
            <img src={downArrow} alt="down arrow" className={styles.downArrow}/>
            <h5 className={styles.filterDropdownLabel}>Price - Low to High</h5>
        </div>
      </div>
    </Fragment>
  )
}
export default TopPicks;
