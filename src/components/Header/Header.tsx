import { Link } from "react-router-dom";
import account from "../../assets/header/account.svg";
import cartIcon from "../../assets/header/cart.svg";
import rose_1 from "../../assets/header/rose_1.svg";
import rose_2 from "../../assets/header/rose_2.svg";

import "./header.css";
import { Badge, Box } from "@mui/material";
import cart from "../../store/cart";
import { observer } from "mobx-react";
import user from "../../store/user";

interface HeaderProps {
    setLoginOpened: (state: boolean) => void;
    setCartOpened: (state: boolean) => void;
}

const Header = observer(({ setLoginOpened, setCartOpened }: HeaderProps): JSX.Element => {
    return (
        <div className={`header-container`}>
            <div className="header-frame">
                <div className="header-frame01">
                    <div className="header-frame02">
                        <Link to="/" className="header-text">
                            <span className="">Оплата і доставка</span>
                            <br className=""></br>
                        </Link>
                        <Link to="/" className="header-text03">
                            <span className="">Догляд за квітами</span>
                            <br className=""></br>
                        </Link>
                        <Link to="/" className="header-text06">
                            <span className="">Про нас</span>
                            <br className=""></br>
                        </Link>
                        <Link to="/" className="header-text09">
                            <span className="">Контакти</span>
                            <br className=""></br>
                        </Link>
                    </div>
                    <div className="header-frame03">
                        {user.isAuthorized ? (
                            <Badge sx={{ fontSize: "2px" }} badgeContent={"✓"} color="primary">
                                <Box sx={{ cursor: "pointer" }} onClick={() => user.signOut()}>
                                    <img alt="account" src={account} className="header-image" />
                                </Box>
                            </Badge>
                        ) : (
                            <Box sx={{ cursor: "pointer" }} onClick={() => setLoginOpened(true)}>
                                <img alt="account" src={account} className="header-image" />
                            </Box>
                        )}

                        <Box sx={{ cursor: "pointer" }} onClick={() => setCartOpened(true)}>
                            <Badge badgeContent={cart.guantityOfGoodsInCart} color="success">
                                <img alt="cart" src={cartIcon} className="header-image1" />
                            </Badge>
                        </Box>
                    </div>
                    <div className="header-frame04">
                        <Link to="/" className="header-navlink2">
                            <div className="header-frame05">
                                <img alt="rose_1" src={rose_1} className="header-image2" />
                                <img alt="rose_2" src={rose_2} className="header-image3" />
                            </div>
                        </Link>
                        <Link to="/" className="header-text12">
                            ROSELLA
                        </Link>
                    </div>
                </div>
            </div>
            <div className="header-frame06">
                <div className="header-frame07">
                    <div className="header-frame08">
                        <div data-thq="thq-dropdown" className="header-dropdown">
                            <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle">
                                <Link to="/" className="header-text13">
                                    <span className="">Букети</span>
                                    <br className=""></br>
                                </Link>
                            </div>
                            <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
                                <li data-thq="thq-dropdown" className="header-dropdown01">
                                    <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle01">
                                        <div className="header-frame09">
                                            <div className="header-frame10">
                                                <Link to="/" className="header-text16">
                                                    Патріотичні букети
                                                </Link>
                                                <Link to="/" className="header-text17">
                                                    Монобукети
                                                </Link>
                                                <Link to="/" className="header-text18">
                                                    Сезонні букети
                                                </Link>
                                                <Link to="/" className="header-text19">
                                                    Авторські букети
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div data-thq="thq-dropdown" className="header-dropdown02">
                            <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle02">
                                <Link to="/" className="header-text20">
                                    <span className="">Троянди</span>
                                    <br className=""></br>
                                </Link>
                            </div>
                            <ul data-thq="thq-dropdown-list" className="header-dropdown-list1">
                                <li data-thq="thq-dropdown" className="header-dropdown03">
                                    <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle03">
                                        <div className="header-frame11">
                                            <div className="header-frame12">
                                                <span className="header-caption">
                                                    <span className="">За кількістю</span>
                                                </span>
                                                <span className="header-caption1">
                                                    <span className="">За кольором</span>
                                                </span>
                                                <span className="header-caption2">
                                                    <span className="">За сортом</span>
                                                </span>
                                            </div>
                                            <Link to="/" className="header-text26">
                                                25 троянд
                                            </Link>
                                            <Link to="/" className="header-text27">
                                                51 троянда
                                            </Link>
                                            <Link to="/" className="header-text28">
                                                101 троянда
                                            </Link>
                                            <Link to="/" className="header-text29">
                                                Білі троянди
                                            </Link>
                                            <Link to="/" className="header-text30">
                                                Червоні троянди
                                            </Link>
                                            <Link to="/" className="header-text31">
                                                Рожеві троянди
                                            </Link>
                                            <Link to="/" className="header-text32">
                                                Жовті троянди
                                            </Link>
                                            <Link to="/" className="header-text33">
                                                Кремові троянди
                                            </Link>
                                            <Link to="/" className="header-text34">
                                                Місцеві троянди
                                            </Link>
                                            <Link to="/" className="header-text35">
                                                Імпортні троянди
                                            </Link>
                                            <Link to="/" className="header-text36">
                                                Кущові троянди
                                            </Link>
                                            <Link to="/" className="header-text37">
                                                Піоновидні троянди
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div data-thq="thq-dropdown" className="header-dropdown04">
                            <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle04">
                                <Link to="/" className="header-text38">
                                    <span className="">Квіти</span>
                                    <br className=""></br>
                                </Link>
                            </div>
                            <ul data-thq="thq-dropdown-list" className="header-dropdown-list2">
                                <li data-thq="thq-dropdown" className="header-dropdown05">
                                    <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle05">
                                        <div className="header-frame13">
                                            <div className="header-frame14">
                                                <Link to="/" className="header-text41">
                                                    Троянди
                                                </Link>
                                                <Link to="/" className="header-text42">
                                                    Тюльпани
                                                </Link>
                                                <Link to="/" className="header-text43">
                                                    Півонії
                                                </Link>
                                                <Link to="/" className="header-text44">
                                                    Еустоми
                                                </Link>
                                                <Link to="/" className="header-text45">
                                                    Гортензії
                                                </Link>
                                                <Link to="/" className="header-text46">
                                                    Хризантеми
                                                </Link>
                                                <Link to="/" className="header-text47">
                                                    Альстромерії
                                                </Link>
                                                <Link to="/" className="header-text48">
                                                    Гіпсофіла
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div data-thq="thq-dropdown" className="header-dropdown06">
                            <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle06">
                                <Link to="/" className="header-text49">
                                    <span className="">Квіткові композиції</span>
                                    <br className=""></br>
                                </Link>
                            </div>
                            <ul data-thq="thq-dropdown-list" className="header-dropdown-list3">
                                <li data-thq="thq-dropdown" className="header-dropdown07">
                                    <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle07">
                                        <div className="header-frame15">
                                            <div className="header-frame16">
                                                <Link to="/" className="header-text52">
                                                    Квіти в коробці
                                                </Link>
                                                <Link to="/" className="header-text53">
                                                    Квіти в корзинці
                                                </Link>
                                                <Link to="/" className="header-text54">
                                                    Квіти у формі серця
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div data-thq="thq-dropdown" className="header-dropdown08">
                            <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle08">
                                <Link to="/" className="header-text55">
                                    <span className="">Привід</span>
                                    <br className=""></br>
                                </Link>
                            </div>
                            <ul data-thq="thq-dropdown-list" className="header-dropdown-list4">
                                <li data-thq="thq-dropdown" className="header-dropdown09">
                                    <div data-thq="thq-dropdown-toggle" className="header-dropdown-toggle09">
                                        <div className="header-frame17">
                                            <div className="header-frame18">
                                                <span className="header-text58">
                                                    <span className="">Особистий</span>
                                                </span>
                                                <span className="header-text60">
                                                    <span className="">Календарний</span>
                                                    <br className=""></br>
                                                </span>
                                            </div>
                                            <div className="header-frame19">
                                                <Link to="/" className="header-text63">
                                                    Весілля
                                                </Link>
                                                <Link to="/" className="header-text64">
                                                    День народження
                                                </Link>
                                                <Link to="/" className="header-text65">
                                                    Народження дитини
                                                </Link>
                                                <Link to="/" className="header-text66">
                                                    Кохаю
                                                </Link>
                                            </div>
                                            <div className="header-frame20">
                                                <Link to="/" className="header-text67">
                                                    14 лютого
                                                </Link>
                                                <Link to="/" className="header-text68">
                                                    8 березня
                                                </Link>
                                                <Link to="/" className="header-text69">
                                                    День матері
                                                </Link>
                                                <Link to="/" className="header-text70">
                                                    Новорічний декор
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <Link to="/" className="header-text71">
                            <span className="">Акції</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Header;
