export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.find((item) => item.id === action.payload.id);

      if (exist) {
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, qty: 1 }];

    case "REMOVE_ONE":
      return state
        .map((item) =>
          item.id === action.payload
            ? { ...item, qty: item.qty - 1 }
            : item
        ).filter((item) => item.qty > 0);

    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
