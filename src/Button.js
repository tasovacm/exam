import React from "react";
import './App.scss';

export default class Button extends React.Component {

    render() {
        return (
            <div className={"button bold pointer sm-font " + this.props.class}
            onClick={() => {
                if (this.props.handleClick) {
                    this.props.handleClick();
                }
            }}>
                {this.props.text}
            </div>)
    }
}