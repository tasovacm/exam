import React from 'react'
import './App.scss';
import Article from "./article-component"
import {connect} from "react-redux";

class ArticlesList extends React.Component {
    constructor(props) {
        super ( props )
    }

    render() {
        return (
            <div className={"flex-center vertical-margin-50 article-list-outer calculated-margins"}>
                <div className={"flex no-wrap article-list-inner article-container"}>
                    {
                        // eslint-disable-next-line array-callback-return
                        this.props.articles.map ( (item) => {
                            return (
                                <Article
                                    key={item.name + item.title}
                                    img={item.image}
                                    title={item.title}
                                    text={item.text}
                                />)

                        } )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        articles : state ? state.articles : '[]'
    });
};


export const ArticlesComponent = connect ( mapStateToProps ) ( ArticlesList );