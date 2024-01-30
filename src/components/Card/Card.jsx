import s from "./Card.module.scss";
import { Container } from "../../views/Container/Container";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../../store/product/product.slice";
import { useParams } from "react-router-dom";
import { Slider } from "./Slider/Slider";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import { AddCartButton } from "../AddCartButton/AddCartButton";

export const Card = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.product);
  const { productId } = useParams();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка...{error}</div>;
  if (!data) return <div>Товар не найден, попробуйте позже</div>;

  const { article, name, price, images, characteristics } = data;
  if (characteristics?.length) {
    return (
      <section className={s.card}>
        <Container className={s.container}>
          <h2 className={s.title}>{name}</h2>
          {images?.length ? <Slider images={images} name={name} /> : ""}
          <div>
            <div className={s.info}>
              <p className={s.price}>
                {price.toLocaleString()}&nbsp;
                <span className={s.currency}>₽</span>
              </p>
              <p className={s.article}>арт. {article}</p>
              <h3 className={s.characteristicsTitle}>Общие характеристики</h3>
              <table className={s.table}>
                <tbody>
                  {characteristics?.map((item, i) => (
                    <tr className={s.row} key={i}>
                      <td className={s.field}>{item[0]}</td>
                      <td className={s.value}>{item[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={s.btns}>
              <AddCartButton className={s.btn} id={data.id} />
              <FavoriteButton className={s.like} id={data.id} />
            </div>
          </div>
        </Container>
      </section>
    );
  }
};
