import s from "./Container.module.scss";

export const Container = ({ children, className }) => (
  <div className={`${s.container} ${className}`}>{children}</div>
);
