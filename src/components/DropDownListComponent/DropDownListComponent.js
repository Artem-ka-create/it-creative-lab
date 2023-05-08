
// import styles from './DropDownList.module.css';
// import { Accordion, AccordionTab } from 'primereact/accordion';
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";       
import './DropDownList.module.css'

import { useState } from "react";

function DropDownListComponent(){   

    const [selected, setSelected] = useState(null);


const toggle = i => {
    
    if(selected === i){
        return setSelected(null);
    }
    
    setSelected(i);
}

    return (

        <div style={{marginBottom:'300px'}}> 
            <div className="accordion">
                { data.map((item,i)=> (
                    <div className="item">
                        <div className="tittle" onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span> {selected === i ? '-' : '+' }</span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content' }>{item.answer}</div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
const data = [
    {
        question : 'Question1',
        answer : 'oidjqweoifweofoiwehoif\nhohfvwehoifweoifo\nwdwqiodjoijwoioiwfvuher'
    },
    {
        question : 'Question2',
        answer : 'oidjqweoifweofoiwehoifhohfvwehoifweoifowdwqiodjoijwoioiwfvuher'
    },
    {
        question : 'Question3',
        answer : 'oidjqweoifweofoiwehoifhohfvwehoifweoifowdwqiodjoijwoioiwfvuher'
    },
    {
        question : 'Question4',
        answer : 'oidjqweoifweofoiwehoifhohfvwehoifweoifowdwqiodjoijwoioiwfvuher'
    },
    {
        question : 'Question5',
        answer : 'oidjqweoifweofoiwehoifhohfvwehoifweoifowdwqiodjoijwoioiwfvuher'
    },
]

export default DropDownListComponent;