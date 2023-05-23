
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";       
import './DropDownList.module.css'

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

function DropDownListComponent(){   

    const [selected, setSelected] = useState(null);


const toggle = i => {
    
    if(selected === i){
        return setSelected(null);
    }
    
    setSelected(i);
}

    return (

        <div style={{marginBottom:'100px'}} id="schoolsFirms"> 
            <h1 style={{color:'#2E3058'}} >Skoly</h1> 

            <div className="accordion">
                { data.map((item,i)=> (
                    <div key={i} className="item">
                        <div className="tittle" onClick={() => toggle(i)}>
                            <div className="tittle_schoolNameBlock">
                                <p className="tittle_schoolNameBlock_tittle">Nazov</p>
                                <div className="tittle_schoolNameBlock_content">{item.schoolName}</div>
                            </div>
                            <div className="tittle_schoolCityBlock">
                                <p className="tittle_schoolNameBlock_tittle">Mesto</p>
                                <div className="tittle_schoolNameBlock_content">{item.city}</div>
                            </div>
                            {selected === i ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/> }
                        </div>
                        <div className={selected === i ? 'content show' : 'content' }>
                            <div className="contentBox">
                            <div className="tittle_schoolNameBlock_tittle">
                                Popis
                            </div>
                            <div className="contentBox_content">
                                {item.content}
                            </div>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
const data = [
    {
        schoolName : 'Stredná odborná škola informačných technológií',
        city : 'Kosice',
        content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut malesuada lorem. Duis varius nisl eget velit sagittis, vitae mollis velit finibus. Suspendisse varius lobortis lectus eget suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum ipsum. Duis sit amet eros vitae nisi faucibus lobortis sit amet quis justo. Sed vitae nibh eu felis egestas suscipit. Quisque faucibus nunc nec leo mattis, non pellentesque est aliquet. Nullam bibendum accumsan odio vitae faucibus. Nulla eget viverra nunc, nec hendrerit nisl. Duis id erat sit amet leo iaculis placerat mollis ut ligula. Nunc vehicula risus non bibendum iaculis. Donec suscipit odio odio, et consequat arcu porta id. Fusce a risus pellentesque enim mollis ultricies. Donec ex libero, elementum vel ante eget, volutpat volutpat eros.'
    },
    {
        schoolName : 'Spojená škola sv. košických mučeníkov',
        city : 'Poprad',
        content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut malesuada lorem. Duis varius nisl eget velit sagittis, vitae mollis velit finibus. Suspendisse varius lobortis lectus eget suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum ipsum. Duis sit amet eros vitae nisi faucibus lobortis sit amet quis justo. Sed vitae nibh eu felis egestas suscipit. Quisque faucibus nunc nec leo mattis, non pellentesque est aliquet. Nullam bibendum accumsan odio vitae faucibus. Nulla eget viverra nunc, nec hendrerit nisl. Duis id erat sit amet leo iaculis placerat mollis ut ligula. Nunc vehicula risus non bibendum iaculis. Donec suscipit odio odio, et consequat arcu porta id. Fusce a risus pellentesque enim mollis ultricies. Donec ex libero, elementum vel ante eget, volutpat volutpat eros.'
    },
    {
        schoolName : 'Stredné Odborné Učilište Pôšt A Telekomunikácií',
        city : 'Presov',
        content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut malesuada lorem. Duis varius nisl eget velit sagittis, vitae mollis velit finibus. Suspendisse varius lobortis lectus eget suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum ipsum. Duis sit amet eros vitae nisi faucibus lobortis sit amet quis justo. Sed vitae nibh eu felis egestas suscipit. Quisque faucibus nunc nec leo mattis, non pellentesque est aliquet. Nullam bibendum accumsan odio vitae faucibus. Nulla eget viverra nunc, nec hendrerit nisl. Duis id erat sit amet leo iaculis placerat mollis ut ligula. Nunc vehicula risus non bibendum iaculis. Donec suscipit odio odio, et consequat arcu porta id. Fusce a risus pellentesque enim mollis ultricies. Donec ex libero, elementum vel ante eget, volutpat volutpat eros.'
    },
    {
        schoolName : 'SOS Jozefa Szakkayho',
        city : 'Bratislava',
        content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut malesuada lorem. Duis varius nisl eget velit sagittis, vitae mollis velit finibus. Suspendisse varius lobortis lectus eget suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id vestibulum ipsum. Duis sit amet eros vitae nisi faucibus lobortis sit amet quis justo. Sed vitae nibh eu felis egestas suscipit. Quisque faucibus nunc nec leo mattis, non pellentesque est aliquet. Nullam bibendum accumsan odio vitae faucibus. Nulla eget viverra nunc, nec hendrerit nisl. Duis id erat sit amet leo iaculis placerat mollis ut ligula. Nunc vehicula risus non bibendum iaculis. Donec suscipit odio odio, et consequat arcu porta id. Fusce a risus pellentesque enim mollis ultricies. Donec ex libero, elementum vel ante eget, volutpat volutpat eros.'
    }
]

export default DropDownListComponent;