import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../components/Table";
import { sortBy, fetchData } from "../actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

class TableContainer extends Component {
  constructor(props) {
    super(props);
    this.sortBy = this.sortBy.bind(this);
  }

  componentDidMount() {
    this.props.fetchData();
  }

  sortBy(key) {
    this.props.sortBy(key);
  }

  render() {
    const rows = this.props.data.sales ? (
      this.props.data.sales.map(row => {
        return (
          <tr>
            <td>{row.weekEnding.toLocaleString()}</td>
            <td>{"$" + row.retailSales.toLocaleString()}</td>
            <td>{"$" + row.wholesaleSales.toLocaleString()}</td>
            <td>{row.unitsSold.toLocaleString()}</td>
            <td>{"$" + row.retailerMargin.toLocaleString()}</td>
          </tr>
        );
      })
    ) : (
      <tr>
        <td rowSpan="5">No data to display</td>
      </tr>
    );

    const arrowIcon = <FontAwesomeIcon icon={faCaretDown} />;

    return <Table rows={rows} sortBy={this.sortBy} icon={arrowIcon} />;
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sortBy: function(key) {
      dispatch(sortBy(key));
    },
    fetchData: function() {
      dispatch(fetchData());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableContainer);
