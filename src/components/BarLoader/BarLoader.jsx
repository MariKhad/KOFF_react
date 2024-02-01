import { Container } from "../../views/Container/Container";
import s from "./BarLoader.module.scss";
import BeatLoader from "react-spinners/BeatLoader";

const override = {
  display: "block",
  justifyContent: "center",
};

export const BarLoader = () => (
  <BeatLoader
    color="#780096"
    cssOverride={override}
    aria-label="Loading Spinner"
    data-testid="loader"
  />
);
