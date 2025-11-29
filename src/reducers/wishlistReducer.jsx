export const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_WISHLIST":
      const exist = state.find((p) => p.id === action.payload.id);
      if (exist) return state;
      return [...state, action.payload];

    case "REMOVE_WISHLIST":
      return state.filter((p) => p.id !== action.payload);

    case "SET_WISHLIST":
      return action.payload;

    default:
      return state;
  }
};
