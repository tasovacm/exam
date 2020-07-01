import React from 'react'

export default class GalleryItem extends React.Component {
    constructor(props) {
        super ( props );
        this.state = {
            expand : false ,
        };
    }


    render() {

        return (<div tabIndex={1}
                     className={"gallery-item margin-10 gallery-item " + (!!this.state.expand ? "gallery-item-active" : "")}
                     style={{
                         backgroundImage : 'url(/assets/' + this.props.url + ')'
                     }}

                     onClick={(e) => {
                         console.log ( "click" );
                         console.log ( this.state.expand );
                         !!this.state.expand ? this.setState ( { expand : false } ) : this.setState ( { expand : true } )

                     }}


        />)


    }
}