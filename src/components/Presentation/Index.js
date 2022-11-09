import styles from '../../Styles/Presentation.module.css'


export default  function Presentation(){
    return (
    
        <div className={styles.front_page}>
            <h1 className={styles.text}> <span>Compu</span><span>servicios</span> </h1>
           <p className={styles.slogan}>Tecnología al mejor precio</p>
        </div>
  
    )
    }