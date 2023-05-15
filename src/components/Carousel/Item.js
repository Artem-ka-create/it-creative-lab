

import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';



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
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/92ffa007-3c41-4610-bb4c-6dcc831515ef/court-borough-low-2-se-big-kids-shoes-5n5Wzk.png" alt="prods"/>
            
            <h3 style={{marginTop:'20px',height:'50px'}}>{property.item.name}</h3>
            <p className="price">{property.item.schoolName}</p>
            
            <p>
                <button  onClick={() => setVisible(true)} >Viac o projekte</button>
            </p>
        </div>

        <div className="dialogClass flex justify-content-center">
            <Dialog draggable={false} header={property.item.name} visible={visible} style={{ width: '80vw', height:'700px' }} onHide={() => setVisible(false)} footer={footerContent}>
                <p className="m-0">
                    {property.item.description}
                </p>
            </Dialog>
        </div>
        </>

    )

}

export default Item;