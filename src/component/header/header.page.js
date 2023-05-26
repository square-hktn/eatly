import { Fragment } from "react"
import styles from './header.module.scss';
import searchIcon from '../../assets/Search.svg';

const Header = () => {
  return (
    <Fragment>
      <div className={styles.headerWrapper}>
        <div className={styles.headerText}>
          <h2>Home</h2>
          <span>Thursday, 20 May 2023</span>
        </div>
        <div className={styles.inputSection}>
          <img className={styles.searchIcon} alt="searchIcon" src={searchIcon} />
          <input type="text" className={styles.searchBar} placeholder="Search for a dish, feature..."/>
        </div>
      </div>
    </Fragment>
  )
}
export default Header;
