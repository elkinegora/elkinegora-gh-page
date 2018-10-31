import * as React from "react";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";
import "../../../css/_media-queries/frontpage/queries-handler.scss"

export default class FrontPage extends React.Component<FrontPageProps, {}> {

    render(){
        return(
            <div className="global__separator">
                <Content />
                <Sidebar />
            </div>
        );
    }
}