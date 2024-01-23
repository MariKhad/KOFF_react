import { Container } from "..//Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import s from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import cn from "classnames";
import { fetchProducts } from "../../store/products/products.slice";
import { useSearchParams } from "react-router-dom";

export const Goods = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.products);
  const [searchParam] = useSearchParams();
  const category = searchParam.get("category");
  const q = searchParam.get("q");
  const list = searchParam.get("list");

  useEffect(() => {
    dispatch(fetchProducts({ category, q, list }));
  }, [dispatch, category, q, list]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка...{error}</div>;

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={cn(s.title, "visually-hidden")}>Список товаров</h2>
        {data?.length ? (
          <ul className={s.list}>
            {data.map((item) => (
              <li key={item.id}>
                <CardItem {...item} />
              </li>
            ))}
          </ul>
        ) : (
          <div>По вашему запросу ничего не найдено</div>
        )}
      </Container>
    </section>
  );
};
