import "./Pagination.css";

const Pagination = ({ totalPosts, postPerPage, handlePageChange }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      {pages.length > 1 && (
        <section className="pagination_section">
          {pages.map((page, idx) => (
            <button
              type="button"
              key={idx}
              className="hero_link"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
        </section>
      )}
    </>
  );
};

export default Pagination;
