
import styles from './Header.module.css';
import { Link } from "react-scroll";

function HeaderComponent() {


    return (
        <div style={{ display: 'flex', alignItems: 'center', background: '#EFD472', justifyContent: 'center', flexDirection: 'column', paddingTop: '20px' }}>

            <div className={styles.navigation_logo_box}>
                {/* <img className={styles.logo_item} src='./kosice_it_valley_logo.png' alt='kosice it valley logo in header'/>
            <img  className={styles.logo_width_item} src='./logo-ksk.png' alt='kosice it valley logo in header'/>
            <img className={styles.logo_item} src='./logo_fei2.png' alt='kosice it valley logo in header'/> */}

            </div>
            <div className={styles.navigation} >
                <div className={styles.navigation_item} id='uvod'>

                    <Link
                        activeClass="active"
                        to="uvod"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={200}>
                        <p className='naviText'>Uvod</p>
                    </Link>
                </div>
                <div className={styles.navigation_item}>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={200}>
                        <p className='naviText'>Nase pojekty</p>

                    </Link>
                </div>
                <div className={styles.navigation_item}>
                    <Link
                        activeClass="active"
                        to="galeria"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={200}>

                        <p className='naviText'>Galeria</p>
                    </Link>
                </div>
                <div className={styles.navigation_item}>
                    <Link
                        activeClass="active"
                        to="footer"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={200}>

                        <p className='naviText'>Kontakty</p>
                    </Link>
                </div>
                <div className={styles.navigation_item}>
                    <Link
                        activeClass="active"
                        to="schoolsFirms"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={200}>

                        <p className='naviText'>Skoly a firmy</p>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default HeaderComponent;