import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 1,
  total: 0,
  isLoading: true,
};

// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((error) => console.log(error));
// });

// fetch data using thunkAPI
// 'cart/getCartItems' Action Type Prefix - the first argument of createAsyncThunk
// automatically appends /pending, /fulfilled, and /rejected in builder.addCase()
// EXAMPLE
//      builder.addCase(getCartItems.pending, (state) => {
//        state.isLoading = true;
//      })
export const getCartItems = createAsyncThunk(
  'cart/getCartItems',
  async (name, thunkAPI) => {
    try {
      // sample log below has access after fetched
      // console.log(name);
      // console.log(thunkAPI);
      // console.log(thunkAPI.getState());
      // thunkAPI.dispatch(openModal());
      const resp = await axios(url);
      return resp.data; // return data is managed on fulfilled payload
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  }
); // go to extraReducers

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // mutate the state behind the scene
    // immer library does that and it comes from redux toolkit
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      // mutate the current state
      // remove item if item.id !== itemId
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    // directly desctruct action {payload}
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      // cartItem.amount += 1;
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      // cartItem.amount += 1;
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount = item.amount + amount;
        total = item.price * item.amount + total;
        //amount += item.amount;
        // total += item.amount * item.price;
      });
      // update the state total and amount
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false;
        // this sets states after successful request
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

//has more data, just need to get the reducer;
//console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
