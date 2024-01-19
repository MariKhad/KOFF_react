import { Container } from "../../views/Container/Container";
import s from "./ErrorPage.module.scss";

export const ErrorPage = () => (
  <Container className={s.container}>
    <div className={s.error}>
      <h2 className={s.title}>Произошла ошибка, попробуйте зайти позже</h2>
    </div>
  </Container>
);
