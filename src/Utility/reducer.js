import { Type } from "./action.type";

export const initialState = { basket: [] };

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      //const existingItem = state.basket.find((item) => {
      //  item.id === action.item.id;
      //});

      // Check if the item is already in the basket
      const existingItemIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingItemIndex >= 0) {
        // If item exists, increase its quantity
        const updatedBasket = state.basket.map((item, index) =>
          index === existingItemIndex
            ? { ...item, amount: item.amount + 1 }
            : item
        );
        return { ...state, basket: updatedBasket };
      } else {
        // If item doesn't exist, add it with a amount of 1
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      }

    case Type.REMOVE_FROM_BASKET:
      const itemIndexToRemove = state.basket.findIndex(
        (item) => item.id === action.id
      );
      if (itemIndexToRemove >= 0) {
        const updatedBasket = state.basket
          .map((item, index) =>
            index === itemIndexToRemove && item.amount > 1
              ? { ...item, amount: item.amount - 1 }
              : item
          )
          .filter((item) => item.amount > 0); // Remove items with 0 quantity

        return { ...state, basket: updatedBasket };
      } else {
        updatedBasket.splice(index, 1);
        console.log(
          `Can't remove product (id: ${action.id}) as it's not in the basket!`
        );
        return state;
      }
    default:
      return state;
  }
};
