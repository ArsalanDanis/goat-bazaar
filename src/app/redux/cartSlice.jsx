import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: "products-cart",
  initialState,
  reducers: {
    addBookToCart: (state, action) => {
      const newItem = {
        ...action.payload,
        _id: nanoid(), // Generate a unique id using nanoid
      };
      state.carts.push(newItem);
    },
    removeBookfromCart: (state, action) => {
      const {_id}=action.payload;
      console.log(action, "Action")
      state.carts = state.carts.filter(item =>{
        console.log("item._id",item._id,"action.payload",action.payload)
        return item._id !== _id
      });
    },
   
  },
});


export const { addBookToCart, removeBookfromCart } = cartSlice.actions;
export default cartSlice.reducer;
