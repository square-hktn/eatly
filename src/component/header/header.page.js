import { useEffect, useState, Fragment } from "react";
import styles from "./header.module.scss";
import searchIcon from "../../assets/Search.svg";

const Header = (props) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const dateObj = new Date();
      setCurrentDate(dateObj);

      const day = dateObj.getDate();
      const month = dateObj.toLocaleString("default", { month: "long" }); // Get month in full alphabet format
      const year = dateObj.getFullYear();

      setDay(day);
      setMonth(month);
      setYear(year);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <div className={styles.headerWrapper}>
        <div className={styles.headerText}>
          <h2>{props.page ? props.page : "Home"}</h2>
          <span>
            {day} {month} {year}
          </span>
        </div>
        <div className={styles.inputSection}>
          <img
            className={styles.searchIcon}
            alt="searchIcon"
            src={searchIcon}
          />
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Search for a dish, feature..."
          />
        </div>
      </div>
    </Fragment>
  );
};
export default Header;
