import "./Table.css";

const Table = ({ heading, children }) => {
  return (
    <>
      <table className="common_table">
        <thead>
          <tr>
            {heading.map((headingName, idx) => (
              <th key={idx}>{headingName}</th>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </>
  );
};

export default Table;
