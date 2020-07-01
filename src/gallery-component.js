import React from 'react'
import './App.scss';
import {connect} from "react-redux";
import ScrollContainer from 'react-indiana-drag-scroll'
import GalleryItem from "./gallery-item";

class GalleryComponent extends React.Component {
    constructor(props) {
        super ( props );
        this.state = {
            switchClick :false
        };
    }

    componentDidMount() {
        document.addEventListener("load",()=>{
            console.log("load");
            let imageArray = document.getElementsByClassName(".gallery-item");
            console.log(imageArray);
            for (let i = 0 ; i < imageArray.length ; ++i) {
                imageArray[i].addEventListener("click", function() {
                    console.log(imageArray[i].getBoundingClientRect().left);
                });
            }
        } );
    }
    render() {
         return (
            <ScrollContainer className="scroll-container flex vertical-center"
            onClick={()=>{
                !!this.state.switchClick? this.setState({switchClick : false}): this.setState({switchClick : true})
            }}>
                    {
                        this.props.gallery.map ( (item) => {
                            return (
                                <GalleryItem
                                    key={item.id}
                                    url={item.url}
                                    />)
                        } )

                    }
            </ScrollContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        gallery : state ? state.gallery : '[]'
    });
};


export const Gallery = connect ( mapStateToProps ) ( GalleryComponent );