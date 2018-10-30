import * as React from "react";
import "./styles/feedback.scss";

export default class Feedback extends React.Component<any, any>{
    render(){
        return(
            <section className="frontpage__section">
                <div className="feedback__container global__justify">
                    <h2><span>SAY YO!</span></h2>
                    <p>Есть интересный проект? Я готов обсудить.</p>
                    <p><span>ВЫШЛИ ЦИФРОВОГО ГОЛУБЯ</span></p>
                    <div className="feedback__socials">
                        <ul>
                            <li>
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <span></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}