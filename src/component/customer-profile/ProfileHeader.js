import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

function ProfileHeader() {
  const [initials, setInitials] = useState("");
  const role = localStorage.getItem("role");
  const fullname = localStorage.getItem("name");
  const replacename = fullname.replace(",", " ");
  const name = replacename;
  const splitname = replacename.split(" ");
  const names = splitname;
  let firstNameInitial = "";
  let secondNameInitial = "";

  //console.log(splitname);

  if (names.length > 0) firstNameInitial = names[0].charAt(0).toUpperCase(); // Get the first character of the first name

  if (names.length > 1) secondNameInitial = names[1].charAt(0).toUpperCase(); // Get the first character of the second name

  useEffect(() => {
    setInitials(firstNameInitial + " " + secondNameInitial);
  }, [firstNameInitial, secondNameInitial]);

  return (
    <div className={styles.header_profile_container}>
      <div className={styles.header_image}>{initials}</div>
      <div className={styles.profile_headerLeft}>
        <h1 className={styles.bigTitle}>{name}</h1>
        <h2 className={styles.name}>{role}</h2>
      </div>
    </div>
  );
}

export default ProfileHeader;
