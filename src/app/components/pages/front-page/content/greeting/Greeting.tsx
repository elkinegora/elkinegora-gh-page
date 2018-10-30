import * as React from "react";
import "./styles/greetings.scss"

export default class Greeting extends React.Component<any, any>{
    render(){
        return(
            <section className="frontpage__section">
                <div className="greetings__container global__separator">
                    <div className="greetings__title global__separator">
                        <h1 className="global__separator">
                            <span>NOT JUST</span>
                            <span>FRONTEND</span>
                            <span>PROGRAMMER</span>
                        </h1>
                    </div>
                    <div className="greetings__socials">
                        <ul className="global__separator">
                            <li>
                                <a href="https://www.facebook.com/Elkinegora" target="_blank" title="FACEBOOK"><span>FACEBOOK</span></a>
                            </li>
                            <li>
                                <a href="https://vk.com/elkinegora" target="_blank" title="VKONTAKTE"><span>VKONTAKTE</span></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/elkinegora/" target="_blank" title="INSTAGRAM"><span>INSTAGRAM</span></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/egorelkin/" target="_blank" title="LINKEDIN"><span>LINKEDIN</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}