import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";

function ProfileHeader() {
  let [initials, setInitials] = useState("");
  let [firstNameInitial, setFirstNameInitial] = useState("");
  let [secondNameInitial, setSecondNameInitial] = useState("");
  let [fullname, setFullname] = useState(null);
  let [name, setName] = useState(null);
  let [role, setRole] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem("role");
    let fullname = localStorage.getItem("name");

    if(!fullname) {
      setFullname('john doe'); // This should not happen
    } else {
      setFullname(fullname)
    }

    if(!role) {
      setRole('user');
    } else {
      setRole(role);
    }
    const replacename = fullname.replace(",", " ");
    setName(replacename);
    const splitname = replacename.split(" ");
    const names = splitname;
  
    //console.log(splitname);
  
    if (names.length > 0) setFirstNameInitial(names[0].charAt(0).toUpperCase()); // Get the first character of the first name
  
    if (names.length > 1) setSecondNameInitial(secondNameInitial = names[1].charAt(0).toUpperCase()); // Get the first character of the second name
    
  })


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
