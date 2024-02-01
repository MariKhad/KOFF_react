import { useEffect } from "react";
import s from "./Order.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../views/Container/Container";
import { clearOrder, fetchOrder } from "../../store/order/order.slice";
import { useParams } from "react-router-dom";
import { fetchCart } from "../../store/cart/cart.slice";

export const Order = () => {
  const dispatch = useDispatch();
  const { orderId } = useParams();
  const { orderData, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchCart());
  });

  useEffect(() => {
    dispatch(fetchOrder(orderId));

    return () => {
      dispatch(clearOrder());
    };
  }, [dispatch, orderId]);

  if (loading) {
    return <div>Загрузка данных...</div>;
  }

  if (error) {
    return <div>Ошибка {error}</div>;
  }

  if (orderData === null) {
    return <div>Заказ не найден</div>;
  }

  return (
    <section className={s.order}>
      <Container className={s.container}>
        <div className={s.content}>
          <div className={s.header}>
            <h2 className={s.title}>Заказ успешно размещен</h2>
            <p className={s.price}>
              {orderData.totalPrice.toLocaleString()}&nbsp;₽
            </p>
          </div>

          <p className={s.number}>№{orderData.id}</p>

          <div className={s.tableWrapper}>
            <h3 className={s.tableTitle}>Данные доставки</h3>
            <table className={s.table}>
              <tbody>
                <tr className={s.row}>
                  <td className={s.field}>Получатель</td>
                  <td className={s.value}>{orderData.name}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Телефон</td>
                  <td className={s.value}>{orderData.phone}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>E-mail</td>
                  <td className={s.value}>{orderData.email}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Адрес доставки</td>
                  <td className={s.value}>{orderData.address}</td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Способ оплаты</td>
                  <td className={s.value}>
                    {orderData.paymentType === "cash"
                      ? "Наличными "
                      : "Картой "}
                    при получении
                  </td>
                </tr>
                <tr className={s.row}>
                  <td className={s.field}>Способ получения</td>
                  <td className={s.value}>
                    {orderData.deliveryType === "delivery"
                      ? "Доставка"
                      : "Самовывоз"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <a className={s.back} href="/">
            На главную
          </a>
        </div>
      </Container>
    </section>
  );
};
