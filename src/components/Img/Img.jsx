import { useEffect, useState } from "react";
import preloadImg from "./preloadImage.gif";
export const Img = ({ className, src, alt }) => {
  const [url, setUrl] = useState(preloadImg);
  useEffect(() => {
    if (src) {
      setUrl(src);
    }
  }, [src]);

  return <img className={className} src={url} alt={alt} />;
};
