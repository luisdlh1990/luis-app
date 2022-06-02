import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes,  } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
  return ( 
    <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:id' element={<ItemListContainer/>}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart />} />
          </Routes>
    </BrowserRouter>
   );
}

export default App;
