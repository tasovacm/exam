import React from 'react';
import './App.scss';
import {Header} from './header-component'
import {Hero} from './Hero-component'
import {ShoeList} from "./shoe-list";
import {Sidebar} from "./sidebar-component";
import {Court} from "./court-component";
import TextBlock from "./text-block-component"
import {ArticlesComponent} from "./articles-list"
import {Gallery} from "./gallery-component";
import Row from "./row-component";
import Footer from "./footer-component";
import '@marcius-capital/fonts'

function App() {
    return (
        <div>
            <Header/>
            <Hero/>
            <ShoeList
                exclude='Court'
                showButton={true}
                showSelection={true}/>
            <Sidebar/>
            <Court/>
            <TextBlock/>
            <ArticlesComponent/>
            <Gallery/>
            <Row/>
            <Footer/>
        </div>
    );
}

export default App;
