
import './App.css';
import "react-multi-carousel/lib/styles.css";

// import HeaderComponent from './components/Header/HeaderComponent';
import PresentationComponent from './components/Presentation/PresentationComponent';
import ActivityComponent from './components/Activity/ActivityComponent';
import DropDownListComponent from './components/DropDownListComponent/DropDownListComponent';
import CarouselComponent from './components/Carousel/CarouselComponent';

function App() {

  return (
    <div className="App">
     <PresentationComponent/>
     <ActivityComponent/>
     <DropDownListComponent/>
     <CarouselComponent  />
    </div>
  );
}

export default App;
