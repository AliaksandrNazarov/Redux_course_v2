import React, { Component } from "react";
import { connect } from "react-redux";
import { User } from "../components/User";
import { handleLogin } from "../actions/UserActions";

class UserContainer extends Component {
  render() {
    const { user, handleLoginAction } = this.props;
    return (
      <User
        name={user.name}
        isFetching={user.isFetching}
        error={user.error}
        handleLogin={handleLoginAction}
      />
    );
  }
}

const mapStateToProps = state => ({ user: state.user });
const mapDispatchToPros = dispatch => ({
  handleLoginAction: () => dispatch(handleLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(UserContainer);
