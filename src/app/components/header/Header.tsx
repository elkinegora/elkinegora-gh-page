import * as React from "react";
import "../../css/components/header.scss";

export default class Header extends React.Component<any,any> {
    constructor(props:any){
        super(props);
        this.state = {
            artistName: "",
            artistSelected: ""
        };
    }

    render(){
        return(
            <header>
                <div className="header__container global__separator">
                    <a className="header__logo global__separator" href="/" title="Главная">
                        <span className="header__logo_visual-trick">YO</span>
                        <span className="header__logo_brick">KING</span>
                    </a>
                    {/*<a href="#">burger</a>*/}
                </div>
            </header>
        );
    }
}