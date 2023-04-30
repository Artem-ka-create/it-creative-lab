
import styles from './Header.module.css';

function HeaderComponent(){



    return (
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
            
        <div style={{position:'absolute', left:0, display:'flex',transform:'translate(10%)', alignItems:'center', justifyContent:'space-between',width:'20%'}}>
            <img style={{width:'2.620545073375262vw'}} src='./kosice_it_valley_logo.png' alt='kosice it valley logo in header'/>
            <img style={{width:'9.433962264150944vw'}} src='./logo-ksk.png' alt='kosice it valley logo in header'/>
            <img style={{width:'3.1446540880503147vw'}} src='./logo_fei2.png' alt='kosice it valley logo in header'/>



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