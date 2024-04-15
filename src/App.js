import './App.css';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Leadership from './component/Leadership';
import Admissions from './component/Admissions';
import Placement from './component/Placement';
import CampusLife from './component/CampusLife';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Home />
      <AboutUs />
      <Leadership />
      <Admissions />
      <Placement />
      <CampusLife />
      <Navbar />
    </div>
  );
}


export default App;