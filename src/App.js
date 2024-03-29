
import './App.css';
import "react-multi-carousel/lib/styles.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 


import PresentationComponent from './components/Presentation/PresentationComponent';
import ActivityComponent from './components/Activity/ActivityComponent';
import DropDownListComponent from './components/DropDownListComponent/DropDownListComponent';
import CarouselComponent from './components/Carousel/CarouselComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';
import GalleriaComponent from './components/Galleria/GalleriaComponent';
import HeaderComponent from './components/Header/HeaderComponent';
// import VideoPlayer from './components/VideoPlayerComponent/VideoPlayerComponent';

function App() {

  

  return (
    <div className="App">
      <HeaderComponent/>
     <PresentationComponent/>
     <ActivityComponent/>
     <DropDownListComponent/>
     <CarouselComponent  />
     <div id='galeria'>
     <h1 style={{ color: '#2E3058' }}>Galeria</h1>

        <GalleriaComponent />
     </div>
     <FooterComponent/>
     

    </div>
  );
}

export default App;
