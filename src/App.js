import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import {BrowserRouter, Route, Routes,  } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import  CartContextProvider  from './components/CartContext';

function App() {
  return ( 
    <CartContextProvider>
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/category/:id' element={<ItemListContainer/>}></Route>
            <Route path='/item/:id' element={<ItemDetailContainer/>}></Route>
            <Route path='/cart' element={<Cart />} />
          </Routes>
      </BrowserRouter>  
    </CartContextProvider>

   );
}

export default App;
