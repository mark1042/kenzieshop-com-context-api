import { EMPTYLIST, PURCHASE, REMOVE } from "./actionTypes";

export const purchase = (product) => ({
  type: PURCHASE,
  product,
});

export const empty = () => ({
  type: EMPTYLIST,
  payload: null,
});

export const remove = (product) => ({
  type: REMOVE,
  product,
});
