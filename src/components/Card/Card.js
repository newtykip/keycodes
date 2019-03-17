/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-target-blank */

import React, { Component } from 'react'
import './Card.css'

class Card extends Component {
    render() {
        const { type, value, friendly } = this.props;

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

export default Card