import React from "react";
import './App.scss';
import {sidebar} from "./services/Redux.actions";
import {connect} from "react-redux";
import {CartItem} from "./cart-item";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "./Button";

class SidebarComponent extends React.Component {
    constructor(props) {
        super ( props );
        this.state = {
            click : 0
        }
    }

    render() {
        var items = [];
        var allSums = [];
        var cart = this.props.cart;
        if (this.props.cart !== this.state.cart) {
            this.setState ( { cart : this.props.cart } );
            this.forceUpdate ()
        }

        function renderItems() {
            for (let item in cart) {
                if (cart.hasOwnProperty ( item ) && cart[item].quantity>0) {
                    items.push (
                        <CartItem
                            key={item.name + "_" + item.color}
                            name={cart[item].name}
                            color={cart[item].color}
                            price={cart[item].price}
                            image={cart[item].image}
                            quantity={cart[item].quantity}
                        />
                    )
                }
            }
            return items
        }

        function sum() {
            for (let item in cart) {
                if (cart.hasOwnProperty ( item ) && cart[item].quantity>0) {
                    allSums.push (
                        cart[item].quantity * cart[item].price
                    )
                }
            }
            var finalPrice = allSums.reduce ( (a , b) => a + b , 0 );
            console.log ( finalPrice );
            return finalPrice
        }

        return (
            <div
                className={"sidebar space-between " + (this.props.showSidebar === false ? ("hide-sidebar") : ("show-sidebar"))}
                onClick={() => {
                    let value = this.state.click;
                    this.setState ( { click : [value] + 1 } )
                }}>
                <div className={"sidebar-inner space-between flex-column"}>
                    <div>
                        <div className={"flex-center space-between margin-20-10prc"}>
                            <h2>Cart</h2>
                            <div onClick={() => {
                                this.props.sidebar ( {
                                    showSidebar : false ,
                                } );
                            }}>
                                <FontAwesomeIcon

                                    style={{ fontSize : "24px" }} icon={faTimesCircle}/>
                            </div>
                        </div>
                        <div>
                            {this.props.cart.length === 0 ? "YOUR CART IS EMPTY" : renderItems ()}
                        </div>
                    </div>
                    <div className={"flex-center flex-column bgd-gray"}
                         style={{ width : "calc(100% + 17px)" }}>
                        <p>You're getting free shipping!</p>
                        <Button
                            class={"bgd-white black-font flex-center margin-15"}
                            text={"Checkout - " + sum () + "$"}/>
                        <p className={"s-font"}>Shipping and taxes calculated at checkout</p>
                    </div>
                </div>
            </div>)
    }
}

const mapStateToProps = (state) => {
    return ({
        men : state ? state.men : '' ,
        women : state ? state.women : '' ,
        active : state ? state.active : '' ,
        activated : state ? state.activated : '' ,
        cart : state.cart ,
        showSidebar : state ? state.showSidebar : ''
    });
};
const mapDispatchToProps = (dispatch) => {
    return ({
        sidebar : (params) => {
            dispatch ( sidebar ( params ) );
        }
    })
};
export const Sidebar = connect ( mapStateToProps , mapDispatchToProps ) ( SidebarComponent );