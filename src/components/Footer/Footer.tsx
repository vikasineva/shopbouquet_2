import { Link } from "react-router-dom";
import "./footer.css";
import facebook from "../../assets/footer/facebook.svg";
import insta from "../../assets/footer/instagram.svg";

const Footer = () => {
    return (
        <div className={`footer-container`}>
            <div className="footer-frame">
                <div className="footer-frame01">
                    <div className="footer-frame02">
                        <span className="footer-text">
                            <span className="">Про компанію</span>
                        </span>
                        <div className="footer-frame03">
                            <Link to="/" className="footer-text02">
                                Доставка і оплата
                            </Link>
                            <Link to="/" className="footer-text03">
                                Догляд та опис квітів
                            </Link>
                            <Link to="/" className="footer-text04">
                                Про нас
                            </Link>
                            <Link to="/" className="footer-text05">
                                Відгуки
                            </Link>
                        </div>
                    </div>
                    <div className="footer-frame04">
                        <span className="footer-text06">
                            <span className="">Клієнтам</span>
                        </span>
                        <div className="footer-frame05">
                            <Link to="/" className="footer-text08">
                                Обробка персональних даних
                            </Link>
                            <Link to="/" className="footer-text09">
                                Заміна та повернення
                            </Link>
                            <Link to="/" className="footer-text10">
                                Публічний договір
                            </Link>
                        </div>
                    </div>
                    <div className="footer-frame06">
                        <span className="footer-text11">Контакти</span>
                        <a href="tel:+380687552211" className="footer-link">
                            <div className="footer-frame07">
                                <span className="footer-text12">Телефон:</span>
                                <span className="footer-text13">+380(68)-755-22-11</span>
                            </div>
                        </a>
                        <a href="mailto:rosellaua@gmail.com?subject=" className="footer-link1">
                            <div className="footer-frame08">
                                <span className="footer-text14">Пошта:</span>
                                <span className="footer-text15">rosellaua@gmail.com</span>
                            </div>
                        </a>
                    </div>
                    <div className="footer-frame09">
                        <span className="footer-text16">
                            <span className="">Наші соц. мережі</span>
                        </span>
                        <div className="footer-frame10">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer noopener"
                                className="footer-link2">
                                <img alt="facebook" src={facebook} className="footer-image" />
                            </a>
                            <div className="footer-frame11">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="footer-link3">
                                    <img alt="instagram" src={insta} className="footer-image1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
