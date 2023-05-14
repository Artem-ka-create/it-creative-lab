
import HeaderComponent from '../Header/HeaderComponent';
import styles from './Presentation.module.css';

function PresentationComponent(){

    console.log(3);
    const statistik=[
        {id:'1',numb:'2', name:'roky'},
        {id:'2',numb:'7', name:'firiem'},
        {id:'3',numb:'22', name:'projektov'},
        {id:'4',numb:'10', name:'Gymnázií'}

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