import s from "./CartPlace.module.scss";
export const CartPlace = () => {
  const x = 1;
  return (
    <div className={s.place}>
      <h3 className={s.subtitle}>Оформление</h3>
      <div className={s.placeInfo}>
        <p>4 товара на сумму:</p>
        <p>
          {"20000".toLocaleString()}&nbsp;
          <span className={s.currency}>₽</span>
        </p>
      </div>
      <p className={s.placeDelivery}>Доставка 0₽</p>
      <button className={s.placeBtn}>Оформить заказ</button>
    </div>
  );
};
