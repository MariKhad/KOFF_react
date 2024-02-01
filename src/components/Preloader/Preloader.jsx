import { Container } from "../../views/Container/Container";
import s from "./Preloader.module.scss";
import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
  justifyContent: "center",
};
export const Preloader = () => (
  <Container className={s.preloader}>
    <ClipLoader
      color="#780096"
      cssOverride={override}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </Container>
);
