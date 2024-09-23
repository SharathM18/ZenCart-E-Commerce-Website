import Table from "../Common/Table";

import "./MyOrder.css";

const MyOrder = () => {
  return (
    <>
      <section className="myorder_section">
        <Table heading={["Order", "Products", "Total", "Status"]}>
          <tbody>
            <tr>
              <td>1</td>
              <td>iPhone 14 Pro</td>
              <td>$ 999</td>
              <td>Shipped</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </>
  );
};

export default MyOrder;
