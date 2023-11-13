import { getShoppingCart } from "../../utilities/theDB";


const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  const shoppingCart = getShoppingCart();
  const savedCart = [];

  for (const id in shoppingCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = shoppingCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  return savedCart;
};

export default cartProductsLoader;
