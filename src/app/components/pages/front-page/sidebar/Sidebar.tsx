import * as React from "react";
import "./styles/sidebar.scss";
let upm_project = "./images/portfolio_001.jpg";
// let sofa_project = "./images/portfolio_002.jpg";
let aprel_project = "./images/portfolio_003.jpg";
let avto_project = "./images/portfolio_004.jpg";
let star_project = "./images/portfolio_005.jpg";
let school_project = "./images/portfolio_006.jpg";
let altera_project = "./images/portfolio_007.jpg";

const css_upmLogo = {background: 'url(' + upm_project + ') no-repeat center center', backgroundSize: "cover", backgroundColor: "#fff"};
const css_aprelLogo = {background: 'url(' + aprel_project + ') no-repeat center center', backgroundSize: "cover", backgroundColor: "#fff"};
const css_avtoLogo = {background: 'url(' + avto_project + ') no-repeat center center', backgroundSize: "cover", backgroundColor: "#fff"};
const css_starLogo = {background: 'url(' + star_project + ') no-repeat center right', backgroundSize: "cover", backgroundColor: "#fff"};
const css_schoolLogo = {background: 'url(' + school_project + ') no-repeat center right', backgroundSize: "cover", backgroundColor: "#fff"};
const css_alteraLogo = {background: 'url(' + altera_project + ') no-repeat center center', backgroundSize: "cover", backgroundColor: "#fff"};


export default class Sidebar extends React.Component<SidebarProps, {}>{
    render(){
        return(
            <div className="sidebar__container">
                <div className="sidebar__inside">
                    <div className="sidebar__projects global__separator global__justify_end">
                        <a href="http://upm.alkondev.ru" target="_blank" className="sidebar__single-project" title="Перейти к проекту">
                            <div className="sidebar-project__image-holder">
                                <div className="sidebar-project__image background-image" style={css_upmLogo} />
                            </div>
                            <div className="sidebar-project__title global__separator global__justify_center">
                                <p>
                                    <span>Производство металлических конструкций</span>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar__projects global__separator global__justify_start">
                        <a href="http://star-ielts74.ru" target="_blank" className="sidebar__single-project" title="Перейти к проекту">
                            <div className="sidebar-project__image-holder">
                                <div className="sidebar-project__image background-image" style={css_starLogo} />
                            </div>
                            <div className="sidebar-project__title global__separator global__justify_center">
                                <p>
                                    <span>Экзаменационный сайт IELTS Челябинск</span>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar__projects global__separator global__justify_end">
                        <a href="https://www.school.alkon.pro" target="_blank" className="sidebar__single-project" title="Перейти к проекту">
                            <div className="sidebar-project__image-holder">
                                <div className="sidebar-project__image background-image" style={css_schoolLogo} />
                            </div>
                            <div className="sidebar-project__title global__separator global__justify_center">
                                <p>
                                    <span>Обучающие курсы Alkon School Челябинск</span>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar__projects global__separator global__justify_start">
                        <a href="http://aprel.alkondev.ru" target="_blank" className="sidebar__single-project" title="Перейти к проекту">
                            <div className="sidebar-project__image-holder">
                                <div className="sidebar-project__image background-image" style={css_aprelLogo} />
                            </div>
                            <div className="sidebar-project__title global__separator global__justify_center">
                                <p>
                                    <span>Интернет магазин воздухового оборудования</span>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar__projects global__separator global__justify_end">
                        <a href="http://bogauto.alexsokolov.pro" target="_blank" className="sidebar__single-project" title="Перейти к проекту">
                            <div className="sidebar-project__image-holder">
                                <div className="sidebar-project__image background-image" style={css_avtoLogo} />
                            </div>
                            <div className="sidebar-project__title global__separator global__justify_center">
                                <p>
                                    <span>Закупка и продажа автозапчастей</span>
                                </p>
                            </div>
                        </a>
                    </div>
                    <div className="sidebar__projects global__separator global__justify_start">
                        <a href="http://altera.rezki.ru" target="_blank" className="sidebar__single-project" title="Перейти к проекту">
                            <div className="sidebar-project__image-holder">
                                <div className="sidebar-project__image background-image" style={css_alteraLogo} />
                            </div>
                            <div className="sidebar-project__title global__separator global__justify_center">
                                <p>
                                    <span>Надежные отношения с партнерами</span>
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}