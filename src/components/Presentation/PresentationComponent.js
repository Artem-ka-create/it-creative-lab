
import zIndex from '@mui/material/styles/zIndex';
import HeaderComponent from '../Header/HeaderComponent';
import styles from './Presentation.module.css';
import { useState, useEffect } from 'react';

function PresentationComponent(){

    console.log(3);
    const statistik=[
        {id:'1',numb:'2', name:'roky'},
        {id:'2',numb:'7', name:'firiem'},
        {id:'3',numb:'22', name:'projektov'},
        {id:'4',numb:'10', name:'Gymnázií'}

    ]


    const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        let text = document.getElementById('text');
    let mt5 = document.getElementById('mt5');
    let mt4 = document.getElementById('mt4');
    let mt3 = document.getElementById('mt3');
    let mt2 = document.getElementById('mt2');
    let mt1 = document.getElementById('mt1');
     console.log(text);
    window.addEventListener('scroll', function(event){
        console.log(mt5.style);
        // console.log(text.style);
        // console.log(value);
        // console.log(window.scrollY);
        // mt3.style = window.scrollY/2 + 'px'
        // mt5.style.marginLeft = window.scrollY/2 + 'px'
        text.style.top = window.scrollY +2 + 'px';
    });
      }, []);

return(
    <div style={{background:'#EFD472', position:"relative", zIndex:"-10"}}>
        <HeaderComponent/>
        {/*  */}
        {/* <img style={{width:'100%',display:"block"}}src='mountainsDemo.svg' alt='mountainsDemo'/> */}
        <div className={styles.prlxMRGN}>
            <section>
                    <img src='mountainSVG/mt5.svg' id='mt5' alt='mt5'/>
                    <h2 id='text' >IT Creative Lab</h2>
                    {/* <h2 id='text' className={styles.projName }>IT Creative Lab</h2> */}

                    <img src='mountainSVG/mt4.svg' id='mt4' alt='mt4'/>
                    <img src='mountainSVG/mt3.svg' id='mt3' alt='mt3'/>
                    <img src='mountainSVG/mt2.svg' id='mt2' alt='mt2'/>
                    <img src='mountainSVG/mt1.svg' id='mt1' alt='mt1'/>
            </section>
        </div>
       




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