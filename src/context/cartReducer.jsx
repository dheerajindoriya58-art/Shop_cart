export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const exist = state.find((p) => p.id === action.payload.id);

      if (exist) {
        return state.map((p) =>
          p.id === action.payload.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...state, { ...action.payload, qty: 1 }];

    case "REMOVE_ONE":
      return state
        .map((p) =>
          p.id === action.payload ? { ...p, qty: p.qty - 1 } : p
        )
        .filter((p) => p.qty > 0);

    case "DELETE_ITEM":
      return state.filter((p) => p.id !== action.payload);

    default:
      return state;
  }
};
