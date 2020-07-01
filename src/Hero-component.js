import React from "react";
import './App.scss';
import Button from './Button'
import {connect} from "react-redux";

class HeroComponent extends React.Component {
    render() {
        function handleClick(e) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        }
        return (<div className={"hero"}>
            <div className={"margin-20-10prc"}>
                <h1 className={"bold-white xxl-font"}>The Royale Navy</h1>
                <p className={"regular-white bold-white"}>Our best selling Navy blue color way is back in limited
                    quanities. Preorder now available</p>
                <Button
                    handleClick={() => {
                        handleClick();
                    }}
                    class="bgd-white"
                    text={"Shop Now"}
                />
            </div>

        </div>)
    }
}

const mapStateToProps = (state) => {
    return ({
        men : state ? state.men : '' ,
        women : state ? state.women : '' ,
    });
};
export const Hero = connect ( mapStateToProps ) ( HeroComponent );
