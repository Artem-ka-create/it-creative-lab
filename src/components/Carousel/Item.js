

import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import VideoPlayer from '../VideoPlayerComponent/VideoPlayerComponent';



function Item( property ){
  console.log(property);

    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="Close" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return(
        <>
        <div className="card">
            <img className="product--image"
            src={property.item.imageTitul} alt={property.item.imageTitul}/>
            <h3 style={{marginTop:'20px',height:'50px'}}>{property.item.name}</h3>
            <p className="price">{property.item.schoolName}</p>
            
            <p>
                <button  onClick={() => setVisible(true)} >Viac o projekte</button>
            </p>
        </div>

        <div className="dialogClass flex justify-content-center">
            <Dialog draggable={false} header={property.item.name} visible={visible} style={{ width: '80vw', height:'700px' }} onHide={() => setVisible(false)} footer={footerContent}>
                <div style={{margin:'20px'}}>
                    <p className="m-0">
                        <b>Popis projektu:</b> <br/>
                        {property.item.description}
                    </p>

                    <VideoPlayer/>
                </div>
                

            </Dialog>
        </div>
        </>

    )

}

export default Item;