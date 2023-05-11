
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel as CarouselCarousel } from 'primereact/carousel';
import { Dialog } from 'primereact/dialog';
import { ProductService } from './service/ProductService';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";  


function PrimeCarousel() {
    
    
    const [products, setProducts] = useState([]);
    const [visible, setVisible] = useState(false);
    const footerContent = (
        <div>
            <Button label="Close" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );
    const responsiveOptions = [
        {
            breakpoint: '4000px',
            numVisible: 6,
            numScroll: 1
        },
        
        {
            breakpoint: '2200px',
            numVisible: 5,
            numScroll: 1
        },
        {
            breakpoint: '1900px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1650px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1250px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '850px',
            numVisible: 1,
            numScroll: 1
        }
    ];



    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    }, []);

    const productTemplate = (product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 card">
                <div className="mb-3">
                <img className="product--image"
                    src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/92ffa007-3c41-4610-bb4c-6dcc831515ef/court-borough-low-2-se-big-kids-shoes-5n5Wzk.png" alt="prods"/>
                   </div>
                <div>
                    <h3 className="mb-1">{product.name}</h3>
                   
                   
                    <p className="price">This Is School Name</p>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type </p>
                 
                  
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                    <button  onClick={() => setVisible(true)} >Viac o projekte</button>
                    </div>
                </div>
            </div>
        );
    };



    return(
        <>
            <div className="dialogClass">
                <CarouselCarousel value={products} numVisible={3} numScroll={2} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                 itemTemplate={productTemplate} />
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

export default PrimeCarousel;