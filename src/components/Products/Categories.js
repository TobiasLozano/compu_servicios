import styles from "../../Styles/Products.module.css";
import parse from "html-react-parser";

import laptop from "../../Images/laptop.webp"
import pc_desktop from "../../Images/pc_desktop.webp"
import sound from "../../Images/sound.jpg"
import smart_tv from "../../Images/smart_tv.jpg"
import smartphone from "../../Images/smartphone.webp"


const categories_list={
  "Portátiles":[laptop,"Lleva la diversion a donde vayas"],
  "PC's de escritorio":[pc_desktop,"Toda la potencia en un solo lugar"],
  "Sonido":[sound,"Disfruta de la musica"],
  "Smart TV's":[smart_tv,"La mejor experiencia en tu hogar"],
  "Smartphones":[smartphone,"Lo que necesites, a la mano"]
}

function Category() {
  let result = "";
  Object.entries(categories_list).forEach(([name, about]) => {
    result += `<div>
    <img src=${about[0]} alt=""/> 
    <span>
        ${name}
    </span>
    <p>${about[1]}</p>
   </div>`;
  });

  return parse(result);
}
export default function Categories() {
  return (
    <div className={styles.categories}>
      <h2 className={styles.section_title}>Del equipo que deseas</h2>
      
      <div className={styles.categories_group}>
          <Category/>
      </div>
    </div>
  );
}
