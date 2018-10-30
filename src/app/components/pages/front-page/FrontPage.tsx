import * as React from "react";
import Content from "./content/Content";
import Sidebar from "./sidebar/Sidebar";

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