import { Link } from "react-router-dom";

import "./ProductsCard.css";

const ProductsCard = ({
  id,
  image,
  price,
  title,
  reviewCount,
  rating,
  stock,
}) => {
  return (
    <>
      <article className="product_card">
        <div className="product_card_image">
          <Link to={`/products/${id}`}>
            <img src={`http://localhost:5000/products/${image}`} alt={title} />
          </Link>
        </div>
        <div className="product_card_details">
          <h3 className="product_card_price">$ {price}</h3>
          <p className="product_card_title">{title}</p>
          <div className="product_card_footer">
            <div className="product_rating">
              <abbr title="Rating">
                <p className="product_star">
                  <i className="bi bi-star"></i>
                  <span>{rating}</span>
                </p>
              </abbr>
              <abbr title="Review Counts">
                <p className="product_review_count">{reviewCount}</p>
              </abbr>
            </div>
            {stock > 0 ? (
              <button type="button" className="add_to_cart">
                <abbr title="Add to Cart">
                  <i className="bi bi-cart"></i>
                </abbr>
              </button>
            ) : null}
          </div>
        </div>
      </article>
    </>
  );
};

export default ProductsCard;
