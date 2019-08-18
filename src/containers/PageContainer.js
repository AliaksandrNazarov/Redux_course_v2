import React, { Component } from "react";
import { connect } from "react-redux";
import { Page } from "../components/Page";
import { getPhotos } from "../actions/PageActions";

class PageContainer extends Component {
  render() {
    const { photos, year, isFetching, error } = this.props.page;
    return (
      <Page
        photos={photos}
        year={year}
        getPhotos={this.props.getPhotosAction}
        isFetching={isFetching}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => ({ page: state.page });
const mapDispatchToProps = dispatch => ({
  getPhotosAction: year => dispatch(getPhotos(year))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageContainer);
