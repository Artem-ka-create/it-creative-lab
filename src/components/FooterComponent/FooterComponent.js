
import styles from './Footer.module.css';
import {} from '@fortawesome/free-solid-svg-icons';

function FooterComponent(){


    return(
        <div>
            <h1>I AM FOOTER COMPONENT</h1>
            <img style={{width:'100%',display:"block"}}src='mountainsDemoFooter.svg' alt='mountainsDemoFooter'/>
            <div className={styles.contentBox}>
                <h1 style={{width:'100%',color:'white', display:'flex', alignItems:'center', justifyContent:'flex-start',paddingLeft:'100px', fontSize:'52px'}}>Mate otazky ? </h1>
                <div className={styles.contentBoxContainer}>
                    
                    <div className={styles.contentBoxItemLogo}>
                    <img  style={{width:'300px'}} src='itValleyNewLogo.png' alt='itValleyNewLogo'/>
                    <img  style={{width:'300px'}} src='FEINewLogo.png' alt='FEINewLogo'/>
                    
                    </div>
                    <div className={styles.contentBoxItemNav}>
                        <p>Uvod</p>
                        <p>Nase pojekty</p>
                        <p>Galeria</p>
                        <p>Kontakty</p>
                        <p>Skoly a firmy</p>
                    </div>
                    <div className={styles.contentBoxItemKontant}>
                        <img src='faceBookLogo.svg' alt='messengerLogo'/>
                        <img src='instagramLogo.svg' alt='messengerLogo'/>
                        <img src='messengerLogo.svg' alt='messengerLogo'/>
                    </div>
                </div>
            </div>
        </div>
        
    )

}

export default FooterComponent;