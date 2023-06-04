import Styles from "./Profile.module.scss";

function MostOrderedMealCard(props) {
  const info = props.info;
  //console.log(info);
  return (
    <div className={Styles.cardContainer}>
      <div className={Styles.img_Container}>
        <img src={info.url} alt="dish" />
      </div>
      <div className={Styles.meal_details}>
        <p className={Styles.meal_title}>{info.name}</p>
      </div>
    </div>
  );
}

export default MostOrderedMealCard;
