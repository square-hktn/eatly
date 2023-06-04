import { useState, useEffect } from "react";
import styles from "./Profile_page.module.scss";
import Header from "../../component/header/header.page";

//components of the profile
import MostOrderedCard from "../../component/customer-profile/MostOrderedCard";
import PersonalInfoCard from "../../component/customer-profile/PersonalInfoCard";
import ProfileHeader from "../../component/customer-profile/ProfileHeader";
import Sidebar from "../../component/sidebar";
const CustomerProfile = () => {
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
    <div className={styles.profile_Container}>
      <div className={styles.sidebar_container}>
        <Sidebar />
      </div>
      <div className={styles.profile_body}>
        <div className={styles.profile_header}>
          <Header page="Profile" />
        </div>
        <div className={styles.profile_innerBody}>
          <div className={styles.innerBodyLeft}>
            <PersonalInfoCard />
          </div>
          <div className={styles.innerBodyRight}>
            <div>
              <ProfileHeader />
            </div>
            <div className={styles.order}>
              <MostOrderedCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
