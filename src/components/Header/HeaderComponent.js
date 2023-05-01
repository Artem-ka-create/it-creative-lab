
import styles from './Header.module.css';

function HeaderComponent(){



    return (
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', marginTop:'20px'}}>
            
        <div className={styles.navigation_logo_box}>
            <img className={styles.logo_item} src='./kosice_it_valley_logo.png' alt='kosice it valley logo in header'/>
            <img  className={styles.logo_width_item} src='./logo-ksk.png' alt='kosice it valley logo in header'/>
            <img className={styles.logo_item} src='./logo_fei2.png' alt='kosice it valley logo in header'/>



        </div>
        <div className={styles.navigation}>
            <div className={styles.navigation_item}>
                Uvod
            </div>
            <div className={styles.navigation_item}>

                Nase pojekty
            </div>
            <div className={styles.navigation_item}>

                Galeria
            </div>
            <div className={styles.navigation_item}>

                Kontakty
            </div>
            
            <div className={styles.navigation_item}>

                Skoly a firmy
            </div>

        </div>

        </div>
    )
}

export default HeaderComponent;