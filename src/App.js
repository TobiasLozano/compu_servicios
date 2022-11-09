import './Styles/App.css';
import Nav from './components/Nav/Index.js';
import Presentation from './components/Presentation/Index.js';
import Store from './components/Store/Index.js';
import Products from './components/Products/Index.js';
import Rewards from './components/Rewards/Index';
import Cotization from './components/Cotization/Index.js';
function App() {
  return (
  
    <>
    
    <Nav/>
    <Presentation/>
    <Store/>
      <Products/>
      <Rewards/>
      <Cotization/>
    
    </>
  );
}

export default App
