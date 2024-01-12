import { Contacts } from "../../components/Contacts/Contacts";
import { DevInfo } from "../../components/DevInfo/DevInfo";
import { Logo } from "../../components/Logo/Logo";
import { Container } from "../Container/Container";
import s from "./Footer.module.scss";

export const Footer = () => (
  <footer>
    <Container className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.contacts}>
        <Contacts />
      </div>
      <div className={s.devInfo}>
        <DevInfo />
      </div>
    </Container>
  </footer>
);
