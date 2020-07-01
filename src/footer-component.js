import React from 'react'
import Button from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook , faInstagram , faYoutube , faPinterest , faTwitter} from "@fortawesome/free-brands-svg-icons"

export default class Footer extends React.Component {
    constructor(props) {
        super ( props )
    }

    render() {
        var iconStyle = {
            fontSize : "35px" ,
            color : "#9c9c9c" ,
            margin : "10px"
        }
        return (
            <div className={"flex-center space-around bgd-black vertical-padding-50 grow-1"}
                 style={{ alignItems : "baseline" }}>
                <div className={"flex-column h-300 space-between"}>
                    <div className={"flex-column h-300 baseline"}>
                        <h2 className={"bold-white"}>Get Updates</h2>
                        <p className={"dimm-font sm-font"}>Sign up for Greats news and receive 25% off your first
                            purchase.</p>
                        <div className={"flex-center"}>
                            <input
                                type={"email"}
                                placeholder={"Email Address"}
                                className={"white-border2 sm-font button bgd-black"}/>
                            <Button text={"Sign Up"}
                                    class={"bgd-white sm-font white-border2"}/>
                        </div>
                    </div>
                    <div className={"flex social"}>
                        <FontAwesomeIcon style={iconStyle} icon={faFacebook}/>
                        <FontAwesomeIcon style={iconStyle} icon={faInstagram}/>
                        <FontAwesomeIcon style={iconStyle} icon={faYoutube}/>
                        <FontAwesomeIcon style={iconStyle} icon={faPinterest}/>
                        <FontAwesomeIcon style={iconStyle} icon={faTwitter}/>
                    </div>
                </div>
                <div className={"flex-center baseline line-h-7 flex-column vertical-margin-10 left links"}>
                    <p className={"bold-white"}>About Us</p>
                    <div className={"flex space-between"}>
                        <div className={"flex-column dimm-font s-font "}>
                            <p>Our Story</p>
                            <p>Responsibility</p>
                            <p>Visit Us</p>
                        </div>
                        <div className={"flex-column dimm-font s-font  "}>
                            <p>Reviews</p>
                            <p>Affiliates</p>
                            <p>The Playbook</p>
                        </div>
                    </div>
                </div>
                <div className={"flex-center baseline line-h-7 flex-column vertical-margin-10 right links"}>
                    <p className={"bold-white"}>Customer service</p>
                    <div className={"flex space-between"}>
                        <div className={"flex-column dimm-font s-font "}>
                            <p>Live chat</p>
                            <p>FAQ</p>
                            <p>Size guide</p>
                            <p>Shipping</p>
                        </div>
                        <div className={"flex-column dimm-font s-font right"}>
                            <p>Returns</p>
                            <p>Contact Us</p>
                            <p>Reffer A Friend</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}