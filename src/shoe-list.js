import React from "react";
import './App.scss';
import {connect} from "react-redux";
import {Shoe} from "./shoe-component";
import {setActive} from "./services/Redux.actions";
import Button from "./Button";

class ShoeListComponent extends React.Component {
    render() {
        return (
            <div className={"vertical-margin-50 calculated-margins"}>
                {this.props.showButton ? (
                <div>
                    <div className={"flex-center"}>
                        <div className={"horizontal-margin-10"}
                             onClick={() => {
                                 this.props.setActive ( {
                                     active : this.props.men ,
                                     activated : "men"
                                 } );
                             }}
                        ><h2
                            className={"m-font pointer " + (this.props.activated === "men" ? "border-bottom" : "dimm-font")}>Men's</h2>
                        </div>
                        <div className={"horizontal-margin-10"}
                             onClick={() => {
                                 this.props.setActive ( {
                                     active : this.props.women ,
                                     activated : "women"
                                 } );
                             }}
                        ><h2
                            className={"m-font pointer " + (this.props.activated === "women" ? "border-bottom" : "dimm-font")}>Women's</h2>
                        </div>
                    </div>
                    <div className={"flex-center m-font"}>Check our bestsellers</div>
                </div>) : false}
                <div className={"article-list"}
                style={this.props.style}>
                    {
                        // eslint-disable-next-line array-callback-return
                        this.props.active.map ( (item) => {
                            if (!!this.props.exclude && item.name !== this.props.exclude) {
                                return (
                                    <Shoe
                                        key={item.name + item.color}
                                        name={item.name}
                                        color={item.color}
                                        price={item.price}
                                        image={item.imgUrl}
                                    />

                                )
                            } else if (!!this.props.only && item.name === this.props.only) {
                                return (
                                    <Shoe
                                        key={item.name + item.color}
                                        name={item.name}
                                        color={item.color}
                                        price={item.price}
                                        image={item.imgUrl}
                                    />

                                )
                            }
                        } )
                    }
                </div>
                {this.props.showButton ? (
                    <Button
                        class={"bgd-black small-white margin-auto bold line-h"}
                        text={"Shop all " + this.props.activated + "'s"}/>) : false}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        men : state ? state.men : '' ,
        women : state ? state.women : '' ,
        active : state ? state.active : '' ,
        activated : state ? state.activated : '' ,
    });
};
const mapDispatchToProps = (dispatch) => {
    return ({
        setActive : (params) => {
            dispatch ( setActive ( params ) );
        }
    })
};
export const ShoeList = connect ( mapStateToProps , mapDispatchToProps ) ( ShoeListComponent );