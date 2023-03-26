import './App.css';
import StoreListing from './components/StoreListing';
import TopBar from './components/TopBar';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Banner/>
      {/* <StoreListing/> */}
    </div>
  );
}

export default App;
