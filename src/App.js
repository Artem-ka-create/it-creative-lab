
import './App.css';
import "react-multi-carousel/lib/styles.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 

// import HeaderComponent from './components/Header/HeaderComponent';
import PresentationComponent from './components/Presentation/PresentationComponent';
import ActivityComponent from './components/Activity/ActivityComponent';
import DropDownListComponent from './components/DropDownListComponent/DropDownListComponent';
import CarouselComponent from './components/Carousel/CarouselComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import GalleriaComponent from './components/Galleria/GalleriaComponent';

function App() {

  return (
    <div className="App">
     <PresentationComponent/>
     <ActivityComponent/>
     <DropDownListComponent/>
     <CarouselComponent  />
     <GalleriaComponent/>
     <FooterComponent/>
     

    </div>
  );
}

export default App;
