import { API_URL } from "../../const";
import s from "./Card.module.scss";
import { Container } from "../../views/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProduct } from "../../store/product/product.slice";
import { useParams } from "react-router-dom";
import { Slider } from "./Slider/Slider";

export const Card = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка...{error}</div>;
  const { article, name, price, images } = data;

  if (price) {
    return (
      <section className={s.card}>
        <Container className={s.container}>
          <h2 className={s.title}>{name}</h2>
          {images?.length ? <Slider images={images} name={name} /> : ""}
          <div className={s.info}>
            <p className={s.price}>
              {price.toLocaleString()}&nbsp;
              <span className={s.currency}>₽</span>
            </p>
            <p className={s.article}>{article}</p>
          </div>
          <div className={s.characteristics}>
            <h3 className={s.characteristicsTitle}>Общие характеристики</h3>
            <div className={s.characteristicsTable}>
              <ui className={s.table}>
                {data?.characteristics.map((item, i) => {
                  <li className={s.row} key={i}>
                    <span className={s.field}>{item[0]}</span>
                    <span className={s.value}>{item[1]}</span>
                  </li>;
                })}
              </ui>
            </div>
          </div>

          <div className={s.btns}>
            <button className={s.btn}>В корзину</button>
            <button className={s.like}>
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  // eslint-disable-next-line max-len
                  d="M8.41325 12.8733C8.18658 12.9533 7.81325 12.9533 7.58659 12.8733C5.65325 12.2133 1.33325 9.45998 1.33325 4.79332C1.33325 2.73332 2.99325 1.06665 5.03992 1.06665C6.25325 1.06665 7.32658 1.65332 7.99992 2.55998C8.67325 1.65332 9.75325 1.06665 10.9599 1.06665C13.0066 1.06665 14.6666 2.73332 14.6666 4.79332C14.6666 9.45998 10.3466 12.2133 8.41325 12.8733Z"
                  fill="white"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Container>
      </section>
    );
  }
};
