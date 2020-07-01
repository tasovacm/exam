import React from 'react'


export default class Badge extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className={"flex  flex-column badge"}>
                <h5 className={"bold m-font"}
                style={{marginBottom:0}}>{this.props.title}</h5>
                <p>{this.props.text}</p>
            </div>
        )
    }
}