import React, { Component } from "react";
import UserContainer from "./containers/UserContainer";
import PageContainer from "./containers/PageContainer";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-intro">Здесь будут мои самые залайканые фото</p>
        <UserContainer />
        <PageContainer />
      </div>
    );
  }
}
