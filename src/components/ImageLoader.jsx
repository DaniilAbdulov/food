import { Image, Skeleton } from "antd";
import { useImageLoader } from "../hooks/useImageLoader";

export const ImageLoader = ({ img }) => {
  const { imgIsLoading, hasError } = useImageLoader(img);
  return (
    <>
      {imgIsLoading ? (
        <Image width={100} height={100} src={img} />
      ) : hasError ? (
        <Skeleton.Image active={false} size="small" />
      ) : (
        <Skeleton.Image active={true} size="small" />
      )}
    </>
  );
};
