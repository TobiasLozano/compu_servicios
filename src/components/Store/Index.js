import styles from '../../Styles/Store.module.css'

export default  function Store(){
    return (
        <div className={styles.store} id="store">
            <div className={styles.store_info}>
                <h2 className={styles.section_title}>¿Quienes somos?</h2>
                <p className={styles.about}>Una tienda de dispositivos tecnologicos, orientada a darte calidad al mejor precio.</p>
                <div className={styles.adress}>
                    <p>Ubicanos en el centro de la ciudad</p>
                    <p className={styles.ubication}>Calle 17, Carrera 36 #20</p>
                    <p>¡Te esperamos!</p>
                </div>
            </div>
            <div className={styles.store_image}>
                
            </div>
        </div>
    )

}