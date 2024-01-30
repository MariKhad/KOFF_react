import { useDispatch } from "react-redux";
import { API_URL } from "../../const";
import s from "./CartProducts.module.scss";
import { removeFormCart, updateCart } from "../../store/cart/cart.slice";

export const CartProducts = ({ products }) => {
  const dispatch = useDispatch();

  const handleMinus = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateCart({ productId: id, quantity: quantity - 1 }));
    } else {
      dispatch(removeFormCart(id));
    }
  };

  const handlePlus = (id, quantity) => {
    dispatch(updateCart({ productId: id, quantity: quantity + 1 }));
  };

  return (
    <ul className={s.products}>
      {products.map(
        ({ id, images: [image], name, price, article, quantity }) => (
          <li key={id} className={s.product}>
            <img src={`${API_URL}${image}`} alt={name} className={s.img} />
            <h3 className={s.titleProduct}>{name}</h3>
            <p className={s.price}>
              {price.toLocaleString()}&nbsp;
              <span className={s.currency}>₽</span>
            </p>
            <p className={s.article}>арт. {article}</p>
            <div className={s.productControl}>
              <button className={s.productBtn} onClick={() => handleMinus()}>
                -
              </button>
              <p className={s.productCount}>{quantity}</p>
              <button className={s.productBtn} onClick={() => handlePlus()}>
                +
              </button>
            </div>
          </li>
        ),
      )}
    </ul>
  );
};
