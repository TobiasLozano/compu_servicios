import styles from "../../Styles/Products.module.css";

import asus from "../../Images/asus.png";
import apple from "../../Images/logotipo-de-apple.png";
import dell from "../../Images/dell.png";
import huawei from "../../Images/huawei.png";
import lenovo from "../../Images/lenovo.png";
import lg from "../../Images/lg.png";
import samsung from "../../Images/samsung.png";
import sony from "../../Images/sony.png";
import xiaomi from "../../Images/xiaomi.png";
import parse from "html-react-parser";
const brands_list = {
  Asus: asus,
  Apple: apple,
  Dell: dell,
  Huawei: huawei,
  Lenovo: lenovo,
  LG: lg,
  Samsung: samsung,
  Sony: sony,
  Xiaomi: xiaomi,
};

function Brand(props) {
  let result = "";
  Object.entries(brands_list).forEach(([name, url_image]) => {
    result += `<div>
    <img src=${url_image} alt=""/> 
    <span>
        ${name}
    </span>
   </div>`;
  });

  return parse(result);
}
export default function Brands() {
  return (
    <div className={styles.brands}>
      <h2 className={styles.section_title}>Las mejores marcas</h2>
      
      <div className={styles.slider} id="brands">
        <div className={styles.slider_element}>
          <Brand />
        </div>
      </div>
    </div>
  );
}
