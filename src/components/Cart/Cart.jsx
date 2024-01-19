import { API_URL } from "../../const";
import s from "./Cart.module.scss";

export const Cart = ({ name, images: [image], price, id }) => (
  <article className={s.card}>
    CART
    <a href={`/product/${id}`} className={s.link}>
      <img src={`${API_URL}/${image}`} alt={name} className="img" />
    </a>
    <div className={s.info}>
      <h3 className={s.title}>
        <a href={`/product/${id}`} className={s.link}>
          {name}
        </a>
      </h3>
      <p className={s.price}>
        {price.toLocalString()}&nbsp;<span className={s.currency}>₽</span>
      </p>
    </div>
    <button className={s.btn}>В корзину</button>
    <button className={s.favorite}>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          // eslint-disable-next-line max-len
          d="M8.41325 12.8733C8.18658 12.9533 7.81325 12.9533 7.58659 12.8733C5.65325 12.2133 1.33325 9.45998 1.33325 4.79332C1.33325 2.73332 2.99325 1.06665 5.03992 1.06665C6.25325 1.06665 7.32658 1.65332 7.99992 2.55998C8.67325 1.65332 9.75325 1.06665 10.9599 1.06665C13.0066 1.06665 14.6666 2.73332 14.6666 4.79332C14.6666 9.45998 10.3466 12.2133 8.41325 12.8733Z"
          fill="white"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </article>
);
