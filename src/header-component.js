import React from "react";
import './App.scss';
import {faSearch , faBars , faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from "react-redux";
import {setActive , sidebar} from "./services/Redux.actions";

class HeaderComponent extends React.Component {
    constructor(props) {
        super ( props );
        this.state = {
            show : true ,
            menu : false
        }
    }


    render() {
        var width = window.innerWidth;
        return (<div
            className={"flex space-between header " + (!!this.state.menu ? "menu-open" : "")}>
            {/*left tabs*/}
            <div className={"flex-center left"}>
                <div className={"horizontal-margin-10 bold-white grow-1"}><h2>GREATS</h2></div>
                <div className={"horizontal-margin-10 small-white grow-1 pointer"}
                     onClick={() => {
                         this.props.setActive ( {
                             active : this.props.men ,
                             activated : "men" ,
                             menu : false
                         } );
                         console.log ( this.props.active )
                     }}
                ><h2>Men</h2>
                </div>
                <div className={"horizontal-margin-10 small-white grow-1 pointer"}
                     onClick={() => {
                         this.props.setActive ( {
                             active : this.props.women ,
                             activated : "women"
                         } );
                     }}
                ><h2>Women</h2>
                </div>
            </div>
            {/*right tabs*/}
            <div className={"flex-center right"}>
                <div className={"horizontal-margin-10 grow-1"}><a className={"small-white"}
                                                                  href={'https://oykos.me/hub'} target="_blank"
                                                                  rel="noopener noreferrer"><h2>Our Story</h2></a></div>
                <div className={"horizontal-margin-10 grow-1"}><a className={"small-white"}
                                                                  href={'https://oykos.me/hub'} target="_blank"
                                                                  rel="noopener noreferrer"><h2>Visit Us</h2></a></div>
                <div className={"horizontal-margin-10 grow-1"}><a className={"small-white"}
                                                                  href={'https://oykos.me/hub'} target="_blank"
                                                                  rel="noopener noreferrer"><h2>My Account</h2></a>
                </div>
                <div className={"horizontal-margin-10 grow-1"}><a className={"small-white"}
                                                                  href={'https://oykos.me/hub'} target="_blank"
                                                                  rel="noopener noreferrer">
                    <FontAwesomeIcon
                    style={{ fontSize : "14px" }} icon={faSearch}/></a></div>
                <div className={"horizontal-margin-10 grow-1 small-white counter flex-center"}
                     onClick={() => {
                         this.props.sidebar ( {
                             showSidebar : true ,
                         } );
                     }}><h2 className={"no-padding pointer"}>{Object.keys ( this.props.cart ).length}</h2>
                </div>
            </div>
            {(width<768) && (
                !this.state.menu ?
                    <FontAwesomeIcon className={"mobile-menu"} icon={faBars}
                                     onClick={() => {
                                         !!this.state.menu ? this.setState ( { menu : false } ) : this.setState ( { menu : true } )
                                     }}/>
                    : <FontAwesomeIcon className={"mobile-menu"} icon={faTimes}
                                       onClick={() => {
                                           !!this.state.menu ? this.setState ( { menu : false } ) : this.setState ( { menu : true } )
                                       }}/>)}
        </div>)
    }
}

const mapStateToProps = (state) => {
    return ({
        men : state ? state.men : '' ,
        women : state ? state.women : '' ,
        active : state ? state.active : '' ,
        activated : state ? state.activated : '' ,
        cart : state ? state.cart : '' ,
        showSidebar : state ? state.showSidebar : ''
    });
};
const mapDispatchToProps = (dispatch) => {
    return ({
        setActive : (params) => {
            dispatch ( setActive ( params ) );
        } ,
        sidebar : (data) => {
            dispatch ( sidebar ( data ) )
        }

    });
};
export const Header = connect ( mapStateToProps , mapDispatchToProps ) ( HeaderComponent );