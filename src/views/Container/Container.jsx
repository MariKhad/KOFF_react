import s from "./Container.module.scss";
import cn from "classnames";

export const Container = ({ children, className }) => (
  <div className={cn(s.container, className)}>{children}</div>
);
