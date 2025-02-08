import React, { Component } from "react";
import { connect } from "react-redux";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import moment from "moment";

class ChartContainer extends Component {
  constructor(props) {
    super(props);
  }

  groupDataByMonth(salesData = []) {
    if (!salesData || !Array.isArray(salesData)) return [];

    const groupedData = salesData.reduce((acc, sale) => {
      if (!sale.weekEnding) return acc;

      const month = moment(sale.weekEnding).format("MMM YYYY");

      if (!acc[month]) {
        acc[month] = {
          weekEnding: month,
          retailSales: 0,
          wholesaleSales: 0,
        };
      }

      acc[month].retailSales += sale.retailSales;
      acc[month].wholesaleSales += sale.wholesaleSales;

      return acc;
    }, {});

    return Object.values(groupedData);
  }

  render() {
    const salesData = this.props.data?.sales || [];
    const monthlyData = this.groupDataByMonth(salesData);

    if (!monthlyData.length) {
      return <p>Loading chart data...</p>;
    }

    return (
      <div id="chart">
        <LineChart width={900} height={400} data={monthlyData}>
          <XAxis dataKey="weekEnding" />
          <Tooltip />
          <Line type="monotone" dataKey="retailSales" stroke="#40a8ef" />
          <Line type="monotone" dataKey="wholesaleSales" stroke="#3c4858" />
        </LineChart>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data || {},
  };
}

export default connect(mapStateToProps)(ChartContainer);