import { Container } from "../../views/Container/Container";
import { CardItem } from "../CardItem/CardItem";
import s from "./Goods.module.scss";

export const Goods = () => (
  <section>
    <Container className={s.container}>
      <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
        <li className={s.item}>
          <CardItem />
        </li>
      </ul>
    </Container>
  </section>
);
