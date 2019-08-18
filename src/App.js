import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "./components/User";
import { Page } from "./components/Page";
import { getPhotos } from "./actions/PageActions";
import { handleLogin } from "./actions/UserActions";
import "./App.css";

class App extends Component {
  render() {
    const { year, photos, isFetching } = this.props.page;
    const { user, getPhotosAction, handleLoginAction } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-intro">Здесь будут мои самые залайканые фото</p>
        <User
          name={user.name}
          isFetching={user.isFetching}
          error={user.error}
          handleLogin={handleLoginAction}
        />
        <Page
          photos={photos}
          year={year}
          getPhotos={getPhotosAction}
          isFetching={isFetching}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    handleLoginAction: () => dispatch(handleLogin())
  };
};

const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
