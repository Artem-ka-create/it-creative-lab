
import styles from './Footer.module.css';
import {} from '@fortawesome/free-solid-svg-icons';

function FooterComponent(){

   


    return(
        <div>
            {/* <img style={{width:'100%',display:"block"}}src='mountainsDemoFooter.svg' alt='mountainsDemoFooter'/> */}
            <section>
                <img src='mountainSVG/mt5.svg' id='mt5' alt='mt5'/>
                <img src='mountainSVG/mt4.svg' id='mt4' alt='mt4'/>
                <img src='mountainSVG/mt3.svg' id='mt3' alt='mt3'/>
                {/* <h2 id='text'>TEXT</h2> */}
                <img src='mountainSVG/mt2.svg' id='mt2' alt='mt2'/>
                <img src='mountainSVG/mt1.svg' id='mt1' alt='mt1'/>

            </section>
            {
                
            }
            <div className={styles.contentBox}>
                <h1 className={styles.headetText}>Mate otazky ? </h1>
                <div className={styles.contentBoxContainer}>
                    
                    <div className={styles.contentBoxItemLogo}>
                    <img  className={styles.longLogo} src='itValleyNewLogo.svg' alt='itValleyNewLogo'/>
                    <img  className={styles.longLogo} src='FEINewLogo.svg' alt='FEINewLogo'/>
                    <img  className={styles.shortLogo} src='ITCreativeLab.svg' alt='ITCreativeLab'/>
                
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