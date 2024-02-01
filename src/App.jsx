import { useDispatch, useSelector } from "react-redux";
import { Footer } from "./views/Footer/Footer";
import { Header } from "./views/Header/Header";
import { useEffect } from "react";
import { fetchAccessToken } from "./store/auth/auth.slice";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Catalog } from "./views/Catalog/Catalog";
import { Goods } from "./views/Goods/Goods";
import { Card } from "./components/Card/Card";
import { Cart } from "./views/Cart/Cart";
import { ErrorPage } from "./components/ErrorPage/ErroPage";
import { Order } from "./components/Order/Order";
import { Breadcrumbs } from "./components/Breadcrumbs/Breadcrumbs";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/category",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Breadcrumbs />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/search",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/favorite",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Goods />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <main>
          <Cart />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/product/:productId",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Breadcrumbs />
          <Card />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/orders/:orderId",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <Order />
        </main>
        <Footer />
      </>
    ),
  },
  {
    path: "/404",
    element: (
      <>
        <Header />
        <main>
          <Catalog />
          <ErrorPage />
        </main>
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const { accessToken, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!accessToken) {
      dispatch(fetchAccessToken());
    }
  }, [dispatch, accessToken]);

  if (loading) return <div>Загрузка...</div>;

  return <RouterProvider router={router} />;
};

export default App;
