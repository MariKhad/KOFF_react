import { Goods } from "../../components/Goods/Goods";
import { Container } from "../Container/Container";
import s from "./Main.module.scss";

export const Main = () => (
  <main>
    <Container className={s.container}>
      {/* <Catalog /> */}
      <Goods />
    </Container>
  </main>
);
