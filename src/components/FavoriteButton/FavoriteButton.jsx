import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../store/favorite/favorite.slice";

export const FavoriteButton = ({ className, id }) => {
  const [hover, setHover] = useState(false);

  const dispatch = useDispatch();
  const favoriteList = useSelector((state) => state.favorite?.favoriteList);

  const isFavorite = favoriteList?.includes(id);
  const handleFavoriteClick = (id) => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <button
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => handleFavoriteClick(id)}>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          // eslint-disable-next-line max-len
          d="M8.41325 12.8733C8.18658 12.9533 7.81325 12.9533 7.58659 12.8733C5.65325 12.2133 1.33325 9.45998 1.33325 4.79332C1.33325 2.73332 2.99325 1.06665 5.03992 1.06665C6.25325 1.06665 7.32658 1.65332 7.99992 2.55998C8.67325 1.65332 9.75325 1.06665 10.9599 1.06665C13.0066 1.06665 14.6666 2.73332 14.6666 4.79332C14.6666 9.45998 10.3466 12.2133 8.41325 12.8733Z"
          fill={hover !== isFavorite ? "#780096" : "FFFFFF"}
          stroke={hover !== isFavorite ? "#780096" : "#1C1C1C"}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
