export const selectShoppingCart = (state) => state.shoppingcart;
export const selectCardId = (state) => state.shoppingcart.id;
export const selectTotalAmount = (state) =>
  state.shoppingcart
    .map((cart) => parseInt(cart.service.price))
    .reduce((a, b) => a + b, 0);
