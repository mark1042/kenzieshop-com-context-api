import { EMPTYLIST, PURCHASE, REMOVE } from "./actionTypes";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case PURCHASE:
      return [...state, action.product];
    case REMOVE:
      const idx = state.indexOf(action.product);
      return state.filter((prod, index) => idx !== index);
    case EMPTYLIST:
      return [];
    default:
      return state;
  }
};

export default cartReducer;
