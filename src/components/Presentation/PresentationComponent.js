
import HeaderComponent from '../Header/HeaderComponent';
import styles from './Presentation.module.css';

function PresentationComponent(){



return(
    <div style={{background:'#EFD472'}}>
        <HeaderComponent/>
        <img style={{width:'100%',display:"block"}}src='mountainsDemo.svg' alt='mountainsDemo'/>     
        <div className={styles.statisticBox}>
            <div className={styles.statisticBox_item}>
                ded
            </div>
            <div className={styles.statisticBox_item}>
                ded
            </div>
            <div className={styles.statisticBox_item}>
                ded
            </div>
        </div> 
    </div>
    

)
}

export default PresentationComponent;