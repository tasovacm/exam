import React from "react";
import './App.scss';
import {connect} from "react-redux";
import {addToCart , editItem  , deleteItem} from "./services/Redux.actions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus , faMinusCircle , faPlus} from "@fortawesome/free-solid-svg-icons";

class CartItemComponent extends React.Component {
    constructor(props) {
        super ( props );
        this.state = {
            counter : 1,
            delete :false,
        }
    }
    render() {
        return (
            <div className={"flex margin-20-10prc cart-item vertical-padding-20"}>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img className={"sidebar-image"} src={`/assets/${this.props.image}`} alt={"shoe"}/>
                <div className={"grow-1 flex-column horizontal-margin-15 space-between"}>
                    <div>
                        <div>
                            {this.props.name}
                        </div>
                        <div>
                            color: {this.props.color}
                        </div>
                    </div>
                    <div className={"flex vertical-center"}>
                        <FontAwesomeIcon
                            onClick={() => {
                                var itemName = this.props.name + "_" + this.props.color;
                                var count = this.state.counter;
                                if (count>1) {
                                    this.setState ( { counter : (count - 1) } );
                                    var quantity = count - 1;
                                    this.props.editItem ( {
                                        singleItem : {
                                            [itemName] : {
                                                quantity : quantity
                                            }
                                        } ,
                                    } );
                                }
                            }
                            }
                            className={"pointer m-font horizontal-margin-10"} icon={faMinus}/>
                        <div className={"l-font"}>{this.props.quantity}</div>
                        <FontAwesomeIcon
                            onClick={() => {
                                var itemName = this.props.name + "_" + this.props.color;
                                var count = this.state.counter;
                                this.setState ( { counter : (count + 1) } );
                                var quantity = count + 1;
                                this.props.editItem ( {
                                    singleItem : {
                                        [itemName] : {
                                            quantity : quantity
                                        }
                                    } ,
                                } );
                            }}
                            className={"pointer m-font horizontal-margin-10"} icon={faPlus}/>
                    </div>
                </div>
                <div className={"flex-column flex-center space-between pointer"}>
                    {this.props.quantity * this.props.price + "$"}
                    <FontAwesomeIcon icon={faMinusCircle}
                                     onClick={() => {
                                         this.setState({delete: true});
                                         var itemName = this.props.name + "_" + this.props.color;
                                         this.props.deleteItem ( {
                                                 singleItem : [itemName]
                                             }
                                         );
                                         this.setState({delete:true})
                                     }}/>
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
        cart : state ? state.cart : '[]' ,
        singleItem : state ? state.singleItem : ''
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        addToCart : (params) => {
            dispatch ( addToCart ( params ) );
        } ,
        editItem : (data) => {
            dispatch ( editItem ( data ) )
        },
        deleteItem : (params) => {
            dispatch ( deleteItem ( params ) );
        }

    });
};
export const CartItem = connect ( mapStateToProps , mapDispatchToProps ) ( CartItemComponent );