import s from "./CardItem.module.scss";

export const CardItem = () => (
  <article className={s.card}>
    <img src="src/assets/photo.png" alt="Фото товара" className="img" />
    <div className={s.info}>
      <h3 className={s.title}>Кресло с подлокотниками</h3>
      <p className={s.price}>
        5000&nbsp;<span className={s.currency}>₽</span>
      </p>
    </div>
    <button className={s.button}>В корзину</button>
  </article>
);
