import { API_URL } from "../../const";
import { addToCart } from "../../store/cart/cart.slice";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import s from "./CardItem.module.scss";

export const CardItem = ({ name, images: [image], price, id }) => (
  <article className={s.card}>
    <a href={`product/${id}`} className={s.link}>
      <img src={`${API_URL}${image}`} alt={name} className={s.img} />
    </a>
    <div className={s.info}>
      <h3 className={s.title}>
        <a href={`product/${id}`} className={s.link}>
          {name}
        </a>
      </h3>
      <p className={s.price}>
        {price.toLocaleString()}&nbsp;<span className={s.currency}>₽</span>
      </p>
    </div>
    <button className={s.btn}>В корзину</button>
    <FavoriteButton className={s.favorite} id={id} />
  </article>
);
