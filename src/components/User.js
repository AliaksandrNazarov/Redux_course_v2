import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class User extends Component {
    render() {
        const { name } = this.props;
        return (
            <div>Привет,{name}</div>
        );
    }
} 

User.propTypes = {
    name: PropTypes.string.isRequired,
}