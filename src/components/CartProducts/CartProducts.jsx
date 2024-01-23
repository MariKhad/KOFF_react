import { API_URL } from "../../const";
import s from "./CartProducts.module.scss";

export const CartProducts = ({ data }) => {
  //const [count, setCount] = useState[]
  console.log(data);
  return (
    <ul className={s.products}>
      <li className={s.product}>
        <img
          src="https://koff-api.vercel.app/img/1hb3ftk9nvjtpgvp.jpg"
          alt="Диван-кровать"
          className={s.img}
        />
        <h3 className={s.titleProduct}>Диван-кровать</h3>
        <p className={s.price}>
          {"132850".toLocaleString()}&nbsp;
          <span className={s.currency}>₽</span>
        </p>
        <p className={s.article}>арт.16954522818</p>
        <div className={s.productControl}>
          <button className={s.productBtn}>-</button>
          <p className={s.productCount}>1</p>
          <button className={s.productBtn}>+</button>
        </div>
      </li>
    </ul>
  );
};
