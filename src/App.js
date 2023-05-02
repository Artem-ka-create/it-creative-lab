
import './App.css';

// import HeaderComponent from './components/Header/HeaderComponent';
import PresentationComponent from './components/Presentation/PresentationComponent';
import ActivityComponent from './components/Activity/ActivityComponent';
import DropDownListComponent from './components/DropDownListComponent/DropDownListComponent';

function App() {
console.log(1);

  return (
    <div className="App">
     <PresentationComponent/>
     <ActivityComponent/>
     <DropDownListComponent/>
    </div>
  );
}

export default App;
