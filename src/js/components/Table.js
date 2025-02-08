import React from "react";

const Table = props => {
  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th scope="col" onClick={() => props.sortBy("weekEnding")}>
              <div>
                WEEK ENDING
                <span className="arrowIcon"> {props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("retailSales")}>
              <div>
                RETAIL SALES <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("wholesaleSales")}>
              <div>
                WHOLESALE SALES <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("unitsSold")}>
              <div>
                UNITS SOLD <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
            <th scope="col" onClick={() => props.sortBy("retailerMargin")}>
              <div>
                RETAILER MARGIN <span className="arrowIcon">{props.icon}</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{props.rows}</tbody>
      </table>
    </div>
  );
};

export default Table;
