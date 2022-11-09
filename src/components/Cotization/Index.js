import styles from "../../Styles/Cotization.module.css";

import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

export default function Cotization() {
  return (
    <div className={styles.cotization} id="cotization">
      <div className={styles.contact}>
        <h2 className={styles.section_title}>Contactanos para asesorarte</h2>
        <p className={styles.mail}>compuservicios@ventas.com</p>
      </div>
      <div className={styles.media}> 
        <h2 className={styles.social}>Visitanos en nuestras redes sociales</h2>
        <div className={styles.social_media}>
          <BsFacebook />
          <BsInstagram />
          <BsWhatsapp />
        </div>
      </div>
    </div>
  );
}
