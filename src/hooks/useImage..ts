import { useEffect, useState } from "react";

const useImage = (url: string): [HTMLImageElement] => {
  const [image, setImage] = useState<HTMLImageElement>(new window.Image());

  useEffect(() => {
    const newImage = new window.Image();
    newImage.src = url;
    newImage.onload = () => {
      setImage(newImage);
    };
  }, [url]);

  return [image];
};

export default useImage;
