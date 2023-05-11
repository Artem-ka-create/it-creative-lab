

import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';


function Item(){

    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="Close" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    return(
        <>
        <div className="card">
            <img className="product--image"
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/92ffa007-3c41-4610-bb4c-6dcc831515ef/court-borough-low-2-se-big-kids-shoes-5n5Wzk.png" alt="prods"/>
            
            <h2>This is Project Name</h2>
            <p className="price">This Is School Name</p>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
            <p>
                <button  onClick={() => setVisible(true)} >Viac o projekte</button>
            </p>
        </div>

        <div className="dialogClass flex justify-content-center">
            <Dialog draggable={false} header="ProjectName" visible={visible} style={{ width: '80vw', height:'700px' }} onHide={() => setVisible(false)} footer={footerContent}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
        </>

    )

}

export default Item;