import React from "react";
import './App.scss';
import {connect} from "react-redux";
import {addToCart} from "./services/Redux.actions";

class ShoeComponent extends React.Component {
    render() {
        return (
            <div className={"article"}
                 onClick={() => {
                     var item = this.props.name + "_" + this.props.color;
                     this.props.addToCart ( {
                         [item] : {
                             name : this.props.name ,
                             color : this.props.color ,
                             price : this.props.price ,
                             image : this.props.image ,
                             quantity : 1
                         }
                     } );
                 }}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className={"article-image"} src={`/assets/${this.props.image}`} alt={"shoe"}/>
                <div className={"flex space-between"}>
                    <div>
                        {this.props.name}
                    </div>
                    <div>
                        {this.props.price}
                    </div>
                </div>
                {this.props.color}
            </div>)
    }
}
const mapStateToProps = (state) => {
    return ({
        men : state ? state.men : '' ,
        women : state ? state.women : '' ,
        active : state ? state.active : '' ,
        activated : state ? state.activated : '' ,
        cart : state ? state.cart : '[]'
    });
};
const mapDispatchToProps = (dispatch) => {
    return ({
        addToCart : (params) => {
            dispatch ( addToCart ( params ) );
        }
    })
};
export const Shoe = connect ( mapStateToProps , mapDispatchToProps ) ( ShoeComponent );