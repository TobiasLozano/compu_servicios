import styles from '../../Styles/Nav.module.css'
import icono from "../../Images/Cs icon light-svg.svg"

import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default  function Nav(){
    return (

        <nav className={styles.nav}>
            <a href='/'> 
            <img src={icono} alt="" className={styles.logo}/>
            </a>
            <input type="checkbox" name="" id="nav_checkbox" className={styles.nav_checkbox} />
            <label htmlFor="nav_checkbox" className={styles.nav_toggle}>
                <MdMenu className={styles.menu_icon}/>
                <MdClose className={styles.close_icon}/>
            </label> 
            <ul className={styles.nav_menu}>
                <li className={styles.link_section}>
                    <a href="#store"  rel="noopener noreferrer">Tienda</a>
                </li>
                <li className={styles.link_section}>
                    <a href="#products"  rel="noopener noreferrer">Productos</a>
                </li>
                <li className={styles.link_section}>
                    <a href="#rewards"rel="noopener noreferrer">Opiniones</a>
                </li>
                <li className={styles.link_section} >
                     <a href="#cotization" rel="noopener noreferrer"className={styles.cotization} >Cotiza ahora</a>
                </li>
            </ul>

        </nav>
        
    )

}

