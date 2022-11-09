import styles from "../../Styles/Products.module.css"
import Brands from "./Brands"
import Categories from "./Categories"
export default function Products(){
    return(
        <div id="products">
        <Brands/>
        <Categories/>
        </div>
        
    )
}