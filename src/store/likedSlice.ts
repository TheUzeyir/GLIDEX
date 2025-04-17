import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikedProduct {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  difficultyLevel: string;
}

interface LikedProductsState {
  items: LikedProduct[];
}

const initialState: LikedProductsState = {
  items: [],
};

const likedProductsSlice = createSlice({
  name: 'likedProducts',
  initialState,
  reducers: {
    addLikedProduct: (state, action: PayloadAction<LikedProduct>) => {
      const newItem = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);
      if (existingItemIndex === -1) {
        state.items.push(newItem);
      }
    },
    removeLikedProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addLikedProduct, removeLikedProduct } = likedProductsSlice.actions;
export const selectLikedProducts = (state: any) => state.likedProducts.items;
export default likedProductsSlice.reducer;
