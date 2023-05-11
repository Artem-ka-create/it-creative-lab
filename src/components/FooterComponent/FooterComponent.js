
import styles from './Footer.module.css';
import {} from '@fortawesome/free-solid-svg-icons';

function FooterComponent(){


    return(
        <div>
            <img style={{width:'100%',display:"block"}}src='mountainsDemoFooter.svg' alt='mountainsDemoFooter'/>
            <div className={styles.contentBox}>
                <h1 className={styles.headetText}>Mate otazky ? </h1>
                <div className={styles.contentBoxContainer}>
                    
                    <div className={styles.contentBoxItemLogo}>
                    <img  className={styles.longLogo} src='itValleyNewLogo.png' alt='itValleyNewLogo'/>
                    <img  className={styles.longLogo} src='FEINewLogo.png' alt='FEINewLogo'/>
                    <img  className={styles.shortLogo} src='ITCreativeLab.png' alt='ITCreativeLab'/>
                
                    </div>
                    <div className={styles.contentBoxItemNav}>
                        <p>Uvod</p>
                        <p>Nase pojekty</p>
                        <p>Galeria</p>
                        <p>Kontakty</p>
                        <p>Skoly a firmy</p>
                    </div>
                    <div className={styles.contentBoxItemKontant}>
                        <img src='faceBookLogo.svg' alt='faceBookLogo'/>
                        <img src='instagramLogo.svg' alt='instagramLogo'/>
                        <img src='messengerLogo.svg' alt='messengerLogo'/>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default FooterComponent;