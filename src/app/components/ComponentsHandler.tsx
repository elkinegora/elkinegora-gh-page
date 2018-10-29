import * as React from "react"
import Header from "./header/Header";

export default class ComponentsHandler extends React.Component<ComponentsHandlerProps, {}> {
    render(){
        return(
            <div className="content__container">
                <Header />
                <h1>This is my starter bundle, that I gonna use to create my personal github page with {this.props.framework} application using {this.props.compiler} with {this.props.bundler}</h1>
            </div>
        );
    }
}