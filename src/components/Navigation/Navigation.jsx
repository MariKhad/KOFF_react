import { Link } from "react-router-dom";
import s from "./Navigation.module.scss";

export const Navigation = () => (
  <nav className={s.navigation}>
    <Link to="/favorite" className={s.link}>
      <span className={s.text}>Избранное</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          // eslint-disable-next-line max-len
          d="M8.41337 13.8733C8.18671 13.9533 7.81337 13.9533 7.58671 13.8733C5.65337 13.2133 1.33337 10.46 1.33337 5.79332C1.33337 3.73332 2.99337 2.06665 5.04004 2.06665C6.25337 2.06665 7.32671 2.65332 8.00004 3.55998C8.67337 2.65332 9.75337 2.06665 10.96 2.06665C13.0067 2.06665 14.6667 3.73332 14.6667 5.79332C14.6667 10.46 10.3467 13.2133 8.41337 13.8733Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
    <Link href="/cart" className={s.link}>
      <span className={s.text}>Корзина</span>
      <span>(0)</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.87329 1.33325L3.45996 3.75325"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.1267 1.33325L12.54 3.75325"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          // eslint-disable-next-line max-len
          d="M1.33337 5.23324C1.33337 3.9999 1.99337 3.8999 2.81337 3.8999H13.1867C14.0067 3.8999 14.6667 3.9999 14.6667 5.23324C14.6667 6.66657 14.0067 6.56657 13.1867 6.56657H2.81337C1.99337 6.56657 1.33337 6.66657 1.33337 5.23324Z"
          stroke="currentColor"
        />
        <path
          d="M6.50671 9.33325V11.6999"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          d="M9.57336 9.33325V11.6999"
          stroke="currentColor"
          strokeLinecap="round"
        />
        <path
          // eslint-disable-next-line max-len
          d="M2.33337 6.66675L3.27337 12.4267C3.48671 13.7201 4.00004 14.6667 5.90671 14.6667H9.92671C12 14.6667 12.3067 13.7601 12.5467 12.5067L13.6667 6.66675"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  </nav>
);
