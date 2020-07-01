import React from "react";

export default class TextBlock extends React.Component {

    render() {
        return (
            <div className={"text-block flex-center flex-column vertical-margin-50"}>
                <h2 className={"bold horizontal-margin-50"}>We make timeless, responibly-made sneakers that are</h2>
                <h2 className={"bold horizontal-margin-50"}>designed to be great, and made to be worn</h2>
                <p className={"vertical-margin-50 border-bottom"}>Learn more</p>
            </div>
        )
    }
}