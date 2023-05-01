
import './App.css';

// import HeaderComponent from './components/Header/HeaderComponent';
import PresentationComponent from './components/Presentation/PresentationComponent';
import ActivityComponent from './components/Activity/ActivityComponent';

function App() {
console.log(1);

  return (
    <div className="App">
     <PresentationComponent/>
     <ActivityComponent/>
    </div>
  );
}

export default App;
