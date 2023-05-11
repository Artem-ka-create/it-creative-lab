
import styles from './Activity.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup,faFaceSmile, faMicrochip, faRobot, faLightbulb, faComments} from '@fortawesome/free-solid-svg-icons'

function ActivityComponent(){

    const activityArrList = [
        {id:'1', text: 'communication', color:'#485BC5',colorbackground:'#EFD472', element:<FontAwesomeIcon icon={faComments}/>},
        {id:'2', text: 'idea', color:'#EFD472',  colorbackground:'#485BC5',element:<FontAwesomeIcon icon={faLightbulb}/>},
        {id:'3', text: 'create', color:'#485BC5', colorbackground:'#EFD472',element:<FontAwesomeIcon icon={faRobot}/>},
        {id:'4', text: 'invent', color:'#EFD472', colorbackground:'#485BC5', element:<FontAwesomeIcon icon={faPeopleGroup}/>},
        {id:'5', text: 'technologies', color:'#485BC5', colorbackground:'#EFD472', element:<FontAwesomeIcon icon={faMicrochip}/>},
        {id:'6', text: 'fun', color:'#EFD472', colorbackground:'#485BC5', element:<FontAwesomeIcon icon={faFaceSmile}/>},
    ];

    return (

        <div style={{marginTop:'100px'}}>
            
            <h1 style={{color:'#2E3058'}}>Myslenka projektu</h1>
            <div className={styles.activityBox}>
            

                {activityArrList.map((item) => (

                <div className={styles.activityBoxItem} style={{background: item.colorbackground}} key={item.id}>
                    <div className={styles.activityBoxItem_text} style={{color: item.color}}>
                        {item.text}
                    </div>
                    <div className={styles.activityBoxItem_icon} style={{color: item.color}}>
                        {item.element}
                    </div>

                </div>
                ))}
            </div>
        </div>
    )
}

export default ActivityComponent;