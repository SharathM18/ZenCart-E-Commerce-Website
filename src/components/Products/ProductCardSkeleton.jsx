import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCardSkeleton = () => {
  return (
    <Skeleton
      style={{
        width: "230px",
        height: "296px",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",
      }}
    />
  );
};

export default ProductCardSkeleton;
