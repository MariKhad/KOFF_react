import { useEffect } from "react";
import { Goods } from "../../components/Goods/Goods";
import { Container } from "../Container/Container";
import s from "./Main.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../store/categories/categories.slice";
import { Catalog } from "../../components/Catalog/Catalog";
import { fetchProducts } from "../../store/products/products.slice";

export const Main = () => {
  const dispatch = useDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useSelector((state) => state.categories);

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loadingCategories || loadingProducts) return <div>Загрузка...</div>;
  if (errorCategories || errorProducts) return <div>Ошибка...</div>;

  return (
    <main>
      <Catalog data={dataCategories} />
      <Goods data={dataProducts} />
    </main>
  );
};
