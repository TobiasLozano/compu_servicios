import parse from "html-react-parser";

import user1 from "../../Images/user1.jpg"
import user2 from "../../Images/user2.jpg"
import user3 from "../../Images/user3.jpg"

const categories_list = {
  "Joaquin Cabrera": [user1, '"Estoy satisfecho con la tienda, excelente servicio"'],
  "Beatriz Martin": [user2, '"Todas mis compras de tecnologia las hago en Compu servicios"'],
  "Juan Manuel Benitez": [user3, '"Buena calidad en los productos"'],
  
};

export default function User() {
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
