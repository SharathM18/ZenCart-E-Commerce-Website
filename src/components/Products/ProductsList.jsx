import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.jsx";
import ProductCardSkeleton from "./ProductCardSkeleton.jsx";
import ProductCard from "./ProductsCard";
import Pagination from "../Common/Pagination.jsx";
import { useEffect } from "react";

import "./ProductsList.css";

const ProductsList = () => {
  const [search, setSearch] = useSearchParams();
  const category = search.get("category");
  const page = search.get("page");

  const { data, error, isLoading } = useFetch(
    "/products",
    {
      params: {
        category: category,
        page: page,
      },
    },
    [category, page]
  );
  const skeletonCount = [1, 2, 3, 4, 5, 6, 7, 8];

  const handlePageChange = (page) => {
    const currentParams = Object.fromEntries([...search]);
    setSearch({ ...currentParams, page: page });
  };

  return (
    <>
      <section className="products_list_section">
        <div className="product_list_header">
          <h2>Products</h2>
          <select name="sort" id="sort" className="products_sorting">
            <option value="">Relevance</option>
            <option value="price desc">Price HIGH TO LOW</option>
            <option value="price asc">Price LOW TO HIGH</option>
            <option value="rate desc">Rate HIGH TO LOW</option>
            <option value="rate asc">Rate LOW TO HIGH</option>
          </select>
        </div>
        <div className="products_list">
          {isLoading &&
            skeletonCount.map((_, idx) => <ProductCardSkeleton key={idx} />)}
          {data?.products &&
            data.products.map((product) => (
              <ProductCard
                key={product._id}
                id={product._id}
                image={product.images[0]}
                title={product.title}
                price={product.price}
                reviewCount={product.reviews.counts}
                rating={product.reviews.rate}
                stock={product.stock}
              />
            ))}
        </div>

        {data?.products && (
          <Pagination
            totalPosts={data.totalProducts}
            postPerPage={data.postPerPage}
            handlePageChange={handlePageChange}
          />
        )}
      </section>
    </>
  );
};

export default ProductsList;
