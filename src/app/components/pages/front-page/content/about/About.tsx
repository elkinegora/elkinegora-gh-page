import * as React from "react";
import "./styles/about.scss";

export default class About extends React.Component<any, any>{
    render(){
        return(
            <section className="frontpage__section">
                <div className="about__container global__separator">
                    <div className="about__title global__separator global__justify_center">
                        <h2 className="global__separator">
                            <span>SOME</span>
                            <span>THINGS</span>
                            <span>ABOUT ME</span>
                        </h2>
                    </div>
                    <div className="about__description">
                        <p>Привет! Меня зовут Егор Ёлкин. Мне 24 года
                            и я фронтенд разработчик. В данный момент творю и развиваюсь в Челябинске, Россия.</p>
                        <p>За три года аутсорсной деятельности, я понял,
                            что мне интересно развиваться в web-разработке
                            и работать в команде.</p>
                        <p>Состоял в разных командах, работающих с разными стратегиями разработки, освоил перфектпиксельную верстку, многозадачность
                            и перевод с дизайнерского языка в язык разработчиков. Имеется опыт адаптивной верстки
                            в достатке, так же владею кроссбраузерной версткой. Программирую на Javascript как новичок давно, используя плагины и доступные решения. Способен видоизменять их самостоятельно. Понимаю код и как он взаимодействует. Я чистый практик и предпочитаю получать навыки нарабатывая практикой</p>
                    </div>
                </div>
            </section>
        );
    }
}