import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY,
} from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    // creating new copy {} or []
    // and mutate state from here - delete,add etc
    // NOTE: don't directly mutate on current state
    const newCart = new Map(state.cart);
    // delete method from new Map() object
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    // spread the ...item then update the amount
    const newItem = { ...item, amount: item.amount + 1 };
    // use set() and add to newCart
    newCart.set(itemId, newItem);

    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);

    // if item.amount is === 1
    // remove from newCart using .delete(itemId)
    if (item.amount === 1) {
      newCart.delete(itemId);
      // early return the state minus the deleted item
      return { ...state, cart: newCart };
    }
    // if amount is more than 1
    // spread the ...item then update the amount
    const newItem = { ...item, amount: item.amount - 1 };
    // use set() and add to newCart
    newCart.set(itemId, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAY) {
    const newState = new Map(
      action.payload.cart.map((item) => [item.id, item])
    );
    // cart: new Map(cartItems.map((item) => [item.id, item])),
    return { ...state, loading: false, cart: newState };
  }
  //return state;
  throw new Error(`No matching action type: ${action.type}`);
};

export default reducer;
