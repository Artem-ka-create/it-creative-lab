import Carousel from "react-multi-carousel";
import Item from "./Item";


function CarouselComponent(){

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1800 },
            items: 5
          },
        largeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 1800, min: 1350 },
          items: 4
        },
        desktop: {
          breakpoint: { max: 1350, min: 950 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 950, min: 765 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 1
        }
      };


    return(
    
        <div style={{marginBottom:'100px'}}>
        <h1 style={{color:'#2E3058'}} >Nase projekty</h1> 
        <Carousel   containerClass="carousel" responsive={responsive}>
        
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>

        </Carousel>

        </div>
    )
}


export default CarouselComponent;