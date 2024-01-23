import logoSvg from "./logo.svg";
import s from "./Logo.module.scss";
import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to="/" className={s.link}>
    <img
      className={s.img}
      src={logoSvg}
      alt="Логотип мебельного магазина Koff"
    />
  </Link>
);
