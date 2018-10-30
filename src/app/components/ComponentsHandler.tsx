import * as React from "react"
import Header from "./header/Header";
import PagesHandler from "./pages/PagesHandler";

export default class ComponentsHandler extends React.Component<ComponentsHandlerProps, {}> {
    render(){
        return(
            <div className="content__container">
                <Header />
                <PagesHandler />
            </div>
        );
    }
}