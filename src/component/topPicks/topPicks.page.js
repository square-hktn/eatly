import { Fragment, useEffect, useState } from "react";
import { Redirect } from 'react-router'
import styles from './topPicks.module.scss';
import downArrow from '../../assets/arrow-ios-down.svg';
import { getHeadersWithAuth } from "../../api";

const TopPicks = () => {
  const [topPicks, setTopPicks] = useState(['All', '', '', '',]);
  const [selectedRestaurant, setSelectedRestaurant] = useState('All');

    useEffect(() => {
      if(topPicks.length < 5) {
        fetch("https://eatly-api.onrender.com/restaurant/top", {
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
          const restaurantNames = data.map((v) => v.name);
          restaurantNames.unshift("All")
          setTopPicks(restaurantNames);
        })
        .catch((err) => {
          console.log(err, "ERROR")
        })
      }
    });

  return (
    <Fragment>
      <div className={styles.filters}>
        <div className={styles.filterSection}>
          {
            Array.isArray(topPicks) && topPicks.map((info, key) => (
              <div className={styles.restaurantSection} key={key} onClick={() => setSelectedRestaurant(info)}>
                <span className={styles.restaurantName}>{info}</span>
                <div className={(selectedRestaurant === info) ? styles.active : ''}></div>
              </div>
            ))
          }
        </div>
        <div className={styles.filterDropDown}>
          <div className={styles.filterContainer}>
            <img src={downArrow} alt="down arrow" className={styles.downArrow}/>
          </div>
          <h5 className={styles.filterDropdownLabel}>Price - Low to High</h5>
        </div>
      </div>
    </Fragment>
  )
}
export default TopPicks;
