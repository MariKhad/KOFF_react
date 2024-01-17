import s from "./Developers.module.scss";

export const Developers = () => (
  <ul className={s.developers}>
    <li>
      Designer:&nbsp;
      <a
        className={s.link}
        href="https://t.me/Mrshmallowww"
        target="_blank"
        rel="noreferrer">
        Anastasia Ilina
      </a>
    </li>
    <li>
      Developer:&nbsp;
      <a
        className={s.link}
        href="http://t.me/bzzzuka"
        target="_blank"
        rel="noreferrer">
        Marina Khadieva
      </a>
    </li>
  </ul>
);
