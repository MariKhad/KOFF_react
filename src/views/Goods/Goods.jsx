import { Container } from "..//Container/Container";
import { CardItem } from "../../components/CardItem/CardItem";
import s from "./Goods.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import cn from "classnames";
import { fetchProducts } from "../../store/products/products.slice";
import { useLocation, useSearchParams } from "react-router-dom";
import { Pagination } from "../../components/Pagination/Pagination";

export const Goods = () => {
  const dispatch = useDispatch();
  const { data, loading, error, pagination } = useSelector(
    (state) => state.products,
  );
  const { favoriteList } = useSelector((state) => state.favorite);
  const [searchParam] = useSearchParams();
  const { pathname } = useLocation();

  const category = searchParam.get("category");
  const q = searchParam.get("q");
  const page = searchParam.get("page");
  const list = favoriteList.join(",");

  useEffect(() => {
    if (pathname === "/favorite") {
      dispatch(fetchProducts({ list, page }));
    }
  }, [dispatch, list, pathname, page]);

  useEffect(() => {
    if (pathname !== "/favorite") {
      dispatch(fetchProducts({ category, q, page }));
    }
  }, [dispatch, category, q, pathname, page]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка...{error}</div>;

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={cn(s.title, "visually-hidden")}>Список товаров</h2>
        {data?.length ? (
          <>
            <ul className={s.list}>
              {data.map((item) => (
                <li key={item.id}>
                  <CardItem {...item} />
                </li>
              ))}
            </ul>
            {pagination ? <Pagination pagination={pagination} /> : ""}
          </>
        ) : (
          <div>По вашему запросу ничего не найдено</div>
        )}
      </Container>
    </section>
  );
};
