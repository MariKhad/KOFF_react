import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFormCart } from "../../store/cart/cart.slice";

export const AddCartButton = ({ className, id }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);

  const isInCart = products.find((item) => item.id === id);

  const handleClick = () => {
    if (!isInCart) {
      dispatch(
        addToCart({
          productId: id,
          quantity: 1,
        }),
      );
    } else {
      dispatch(removeFormCart(id));
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {isInCart ? "Из корзины" : "В корзину"}
    </button>
  );
};
