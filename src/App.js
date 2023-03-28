import './App.css';
// import StoreListing from './components/StoreListing';
import TopBar from './components/TopBar';
import Banner from './components/Banner';
import StoreListing from './components/StoreListing';


const stores = [
  {
    imgUrl: './assets/sprouts.webp',
    storeName: 'Sprouts Farmers Market'
  },
  {
    imgUrl: './assets/smiths.webp',
    storeName: "Smith's",
  },
  {
    imgUrl: './assets/albertsons.webp',
    storeName: 'Albertsons'
  }
]

function App() {
  return (
    <div className="App">
      <TopBar/>
      <Banner/>
      <StoreListing stores={stores}/>
    </div>
  );
}

export default App;
