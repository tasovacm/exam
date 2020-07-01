import React from 'react'
import './App.scss';

export default class Article extends React.Component {
    constructor(props) {
        super ( props )
    }

    render() {
        return (
            <div className={"margin-15 grow-1 no-overflow single-article pointer"}
            onClick={()=>{
                var win = window.open("https://oykos.me/hub/", '_blank');
                win.focus();
            }}>
            <div style={{
                backgroundImage : 'url(/assets/' + this.props.img + ')' ,
                backgroundSize : "cover" ,
                backgroundPosition : "center" ,
                paddingTop : "66.6%"
            }}>

            </div>
            <h3>{this.props.title}</h3>
            <p>{this.props.text}</p>
        </div>)
    }
}

