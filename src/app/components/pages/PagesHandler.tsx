import * as React from "react"
import FrontPage from "./front-page/FrontPage";

export default class PagesHandler extends React.Component<any, {}> {
    render(){
        return(
            <div className="page__handler">
                <FrontPage />
            </div>
        );
    }
}