import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import s from "./Catalog.module.scss";
import { fetchCategories } from "../../store/categories/categories.slice";
import { useEffect } from "react";

export const Catalog = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка...{error}</div>;

  return (
    <nav className={s.catalog}>
      <Container className={s.container}>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        <ul className={s.list}>
          {data.map((item, i) => (
            <li key={i} className={s.item}>
              <a className={s.link} href={`/category?slug=${item}`}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
