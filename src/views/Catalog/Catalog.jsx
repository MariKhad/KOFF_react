import { useDispatch, useSelector } from "react-redux";
import { Container } from "../Container/Container";
import s from "./Catalog.module.scss";
import { fetchCategories } from "../../store/categories/categories.slice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BarLoader } from "../../components/BarLoader/BarLoader";

export const Catalog = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) {
    return (
      <Container className={s.preloader}>
        <BarLoader />
      </Container>
    );
  }

  if (error) return <div>Ошибка...{error}</div>;

  return (
    <nav className={s.catalog}>
      <Container className={s.container}>
        <h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
        <ul className={s.list}>
          {data.map((item, i) => (
            <li key={i} className={s.item}>
              <Link className={s.link} to={`/category?category=${item}`}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};
