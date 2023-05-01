
import HeaderComponent from '../Header/HeaderComponent';
import styles from './Presentation.module.css';

function PresentationComponent(){

    const statistik=[
        {id:'1',numb:'3', name:'pocet rokov'},
        {id:'2',numb:'18', name:'IT Firmy'},
        {id:'3',numb:'14', name:'partnety'},
        {id:'4',numb:'3', name:'organizatory'}

    ]

return(
    <div style={{background:'#EFD472'}}>
        <HeaderComponent/>
        <h1 className={styles.projName }>IT Creative Lab</h1>
        <img style={{width:'100%',display:"block"}}src='mountainsDemo.svg' alt='mountainsDemo'/>
        
        <div className={styles.statisticBox}>
        {statistik.map((item) => (

        <div className={styles.statisticBox_item} key ={item.id} >
            <div className={styles.number_box} >{item.numb}</div>
            <div className={styles.stat_name_box} >{item.name}</div>
        </div>
      ))}
        </div> 
    </div>
    

)
}

export default PresentationComponent;