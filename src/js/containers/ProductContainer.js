import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../components/Product";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tags = this.props.data.tags ? (
      this.props.data.tags.map(tag => {
        return <span className="tags">{tag}</span>;
      })
    ) : (
      <span />
    );

    const alt = this.props.data.title
      ? this.props.data.title + " image"
      : "No image";

    return (
      <Product
        src={this.props.data.image}
        title={this.props.data.title}
        subtitle={this.props.data.subtitle}
        tags={tags}
        alt={alt}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  null
)(ProductContainer);
