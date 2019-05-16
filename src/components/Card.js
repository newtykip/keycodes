/* eslint-disable jsx-a11y/anchor-has-content, react/jsx-no-target-blank */

// imports
import React, { Component } from 'react';
import './Card.css';

// Card class
export default class Card extends Component {
    render() {
        // destructuring
        const { type, value, friendly } = this.props;

        // jsx
        return value || friendly ? (
            <div className={`card item-${type}`}>
                <div className="card-header">
                    event.{type}
                    { type === 'which' ? <a href="https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent" target="_blank" rel="noopener" className="deprecated-link">(deprecated)</a> : '' }
                </div>
                <div className="card-main">
                    <div className="main-description">{value} <span className="muted">{friendly}</span></div>
                </div>
            </div>
        ) : '';
    }
}