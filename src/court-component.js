import React from "react";
import './App.scss';
import {connect} from "react-redux";
import {setActive} from "./services/Redux.actions";
import {ShoeList} from "./shoe-list";

class CourtComponent extends React.Component {
    render() {
        return (
            <div className={"flex-center vertical-margin-50"}>
                <div className={"grow-1"}>
                    <img src={require("./img/court.jpg")} width={"100%"}/>
                </div>
                <div className={"flex-column flex-center horizontal-padding-30 baseline court-list"}
                >
                    <h3>{this.props.activated}</h3>
                    <h1>The Court</h1>
                    <h3>You won't need to dunk on anyone to look great in these 90's basketball inspired kicks</h3>
                <ShoeList
                    style = {{padding:"0"}}
                    only={'Court'}/>
                </div>
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
export const Court = connect ( mapStateToProps , mapDispatchToProps ) ( CourtComponent );