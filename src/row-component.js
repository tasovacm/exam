import React from 'react'
import Badge from "./badge-component";


export default class Row extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className={"flex-center space-around calculated-margins"}
            style={{alignItems:"baseline"}}>
                <Badge
                title={"Free shipping & Returns"}
                text={"Big Style, No Risk. Free Shipping + Returns On All Orders"}
                />
                <Badge
                    title={"Refer A Friend"}
                    text={"Sing Our Praises, Save Big"}
                />
                <Badge
                    title={"Customer Service"}
                    text={"If the shoe doesn’t fit...drop us a line!  Questions? Concerns? Compliments? We are here for you via email, text, or chat."}
                />
            </div>
        )
    }
}