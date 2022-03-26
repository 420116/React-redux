import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import uiSlice from './store/ui-slice';
import { useEffect } from 'react';
import {sendCartData,setCartData}  from './store/cart-actions';
let initial = true;
function App() {
  const showCart  = useSelector(state=> state.ui.cartIsVisible);
  const cart = useSelector(state=> state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    if(initial){
      initial = false;
      dispatch(setCartData());
      return;
    }
    if(cart.changed){
       dispatch(sendCartData(cart));
    }
  },[cart,dispatch]);

  return (
    <Layout>
      {showCart && <Cart/>}
      <Products />
    </Layout>
  );
}

export default App;
