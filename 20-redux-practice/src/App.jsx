import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { calculateTotals, getCartItems } from './feature/cart/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './components/Modal';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  // invoke dispatch hook
  const dispatch = useDispatch();
  //dispaly change whenever there are change to cartItems
  // changes to amount and totals in this example
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  //initialy load content
  // setup useEffect for getCartItems - thunkAPI
  useEffect(() => {
    //dispatch(getCartItems(user)); thunkAPI parameter found in createAsyncThunk hook
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
