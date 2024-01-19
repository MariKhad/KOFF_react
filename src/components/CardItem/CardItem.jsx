import { API_URL } from "../../const";
import s from "./CardItem.module.scss";

export const CardItem = ({ data }) => (
  <article className={s.card}>
    <img src={`${API_URL}/${data.images[0]}`} alt={data.name} className="img" />
    <div className={s.info}>
      <h3 className={s.title}>{data.name}</h3>
      <p className={s.price}>
        {data.price}&nbsp;<span className={s.currency}>₽</span>
      </p>
    </div>
    <button className={s.btn}>В корзину</button>
  </article>
);
