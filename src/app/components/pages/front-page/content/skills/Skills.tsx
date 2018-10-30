import * as React from "react";

export default class Skills extends React.Component<any, any>{
    render(){
        return(
            <section className="frontpage__section">
                <div className="about__container skills__container global__separator">
                    <div className="about__description">
                        <div className="about__list">
                            <h3><span>ОБРАЗОВАНИЕ</span></h3>
                            <ul>
                                <li>
                                    <p>Безопасность информационных систем</p>
                                    <p><span>ЮУрГУ, бакалавр</span></p>
                                </li>
                                <li>
                                    <p>Переводчик в сфере профессиональных коммуникаций</p>
                                    <p><span>ЮУрГУ, доп. образование</span></p>
                                </li>
                                <li>
                                    <p>Фундаментальная информатика и технологии</p>
                                    <p><span>ЮУрГУ, магистр</span></p>
                                </li>
                            </ul>
                        </div>
                        <div className="about__list">
                            <h3><span>ПРОФЕССИОНАЛЬНЫЕ НАВЫКИ</span></h3>
                            <ul>
                                <li><p>Верстальщик</p></li>
                                <li><p>Переводчик</p></li>
                                <li><p>Командный игрок</p></li>
                                <li><p>Высокоуровневый программист</p></li>
                            </ul>
                        </div>
                        <div className="about__list">
                            <h3><span>РАЗРАБОТКА</span></h3>
                            <ul>
                                <li><p>POSTCSS</p></li>
                                <li><p>GIT</p></li>
                                <li><p>SCSS</p></li>
                                <li><p>PHOTOSHOP|FIGMA|SKETCH</p></li>
                                <li><p>WEBPACK</p></li>
                                <li><p>BEM</p></li>
                                <li><p>NPM</p></li>
                                <li><p>PHP</p></li>
                                <li><p>CMS</p></li>
                                <li><p>JAVASCRIPT</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="about__title about__skills global__separator global__justify_start global__align_self-center">
                        <h2 className="global__separator">
                            <span>TIME TO</span>
                            <span>SHOW</span>
                            <span>MY SKILLS</span>
                        </h2>
                    </div>
                </div>
            </section>
        );
    }
}