import styles from "../../Styles/Rewards.module.css";
import User from "./User.js";
export default function Rewards() {
  return (
    <div className={styles.rewards} id="rewards">
      <h2 className={styles.section_title}>Somos la mejor opcion, nuestros clientes lo confirman</h2>
      
      <div className={styles.rewards_list}>
          <User/>
      </div>
    </div>
  );
}
