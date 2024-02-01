import { useDispatch, useSelector } from "react-redux";
import s from "./CartForm.module.scss";
import { useForm } from "react-hook-form";
import { submitCartForm } from "../../store/cartForm/cartForm.clice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const CartForm = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const orderStatus = useSelector((state) => state.cartForm);
  console.log("orderStatus.orderId: ", orderStatus.orderId);

  const onSubmit = (data) => {
    dispatch(submitCartForm(data));
  };

  useEffect(() => {
    if (orderStatus.success) {
      navigate(`/orders/${orderStatus.orderId}`);
    }
  }, [dispatch, orderStatus, navigate]);

  return (
    <form className={s.form} id="orderForm" onSubmit={handleSubmit(onSubmit)}>
      <h3 className={s.subtitle}>Данные для доставки</h3>
      <fieldset className={s.fieldsetInput}>
        <label>
          <input
            className={s.input}
            type="text"
            {...register("name", { required: true })}
            placeholder="ФИО"
          />
          {errors.name ? <p className={s.error}>Это поле обязательно</p> : ""}
        </label>
        <label>
          <input
            className={s.input}
            type="text"
            {...register("phone", { required: true })}
            placeholder="Телефон"
          />
          {errors.phone ? <p className={s.error}>Это поле обязательно</p> : ""}
        </label>
        <label>
          <input
            className={s.input}
            type="email"
            {...register("email", { required: true })}
            placeholder="E-mail"
          />
          {errors.email ? <p className={s.error}>Это поле обязательно</p> : ""}
        </label>
        <input
          className={s.input}
          type="text"
          {...register("address")}
          placeholder="Адрес доставки"
        />
        <textarea
          className={s.textarea}
          {...register("comments")}
          placeholder="Комментарий к заказу"></textarea>
      </fieldset>
      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Доставка</legend>
        <label className={s.radio}>
          <input
            className={s.radioInput}
            type="radio"
            value="delivery"
            {...register("deliveryType", { required: true })}
          />
          Доставка
        </label>
        <label className={s.radio} htmlFor="">
          <input
            className={s.radioInput}
            type="radio"
            {...register("deliveryType", { required: true })}
            value="pickup"
          />
          Самовывоз
          {errors.deliveryType ? (
            <p className={s.error}>Выберите способ доставки</p>
          ) : (
            ""
          )}
        </label>
      </fieldset>
      <fieldset className={s.fieldsetRadio}>
        <legend className={s.legend}>Оплата</legend>
        <label className={s.radio} htmlFor="">
          <input
            className={s.radioInput}
            type="radio"
            name="paymentType"
            value="card"
            {...register("paymentType", { required: true })}
          />
          Картой при получении
        </label>
        <label className={s.radio} htmlFor="">
          <input
            className={s.radioInput}
            type="radio"
            name="paymentType"
            value="cash"
            {...register("paymentType", { required: true })}
          />
          Наличными при получении
          {errors.paymentType ? (
            <p className={s.error}>Выберите способ оплаты</p>
          ) : (
            ""
          )}
        </label>
      </fieldset>
    </form>
  );
};
