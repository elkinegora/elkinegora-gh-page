import * as React from "react";
import Greeting from "./greeting/Greeting";
import About from "./about/About";
import Skills from "./skills/Skills";
import Feedback from "./feedback/Feedback";
import "../../../../css/_global-styles/mixins.scss";
import "./styles/content.scss";

export default class Content extends React.Component<any, any>{
    render(){
        return(
            <div className="frontpage__container">
                <Greeting />
                <About />
                <Skills />
                <Feedback />
            </div>
        );
    }
}