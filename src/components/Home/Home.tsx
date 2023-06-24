import React from "react";
import { Link } from "react-router-dom";

import img_1_700h from "../../assets/home/img/img_1-700h.png";
import img_2_300h from "../../assets/home/img/img_2-300h.png";
import img_3_300h from "../../assets/home/img/img_3-300h.png";
import img_4_300h from "../../assets/home/img/img_4-300h.png";
import img_5_600h from "../../assets/home/img/img_5-600h.png";
import img_7_700w from "../../assets/home/img/img_7-700w.png";
import mock_400h from "../../assets/home/img/mock-400h.png";
import mock_600w from "../../assets/home/img/mock-600w.png";
import left_arrow from "../../assets/home/left_arrow.svg";
import right_arrow from "../../assets/home/right_arrow.svg";
import pointer from "../../assets/home/pointer.svg";

import "./home.css";

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-frame"></div>
            <div className="home-frame01">
                <img alt="img_1" src={img_1_700h} className="home-image" />
                <div className="home-frame02">
                    <div className="home-frame03">
                        <span className="home-text">Даруйте букети мрії разом з нами</span>
                        <Link to="/" className="home-text001">
                            <span>Переглянути</span>
                            <br></br>
                        </Link>
                        <span className="home-text004">
                            <span>Найкращі авторські букети від наших флористів</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="home-frame04">
                <div className="home-carousel">
                    <div className="home-frame05">
                        <span className="home-text006">
                            <span>700 грн</span>
                        </span>
                        <span className="home-text008">
                            <span>
                                <span>
                                    Букет з трояндами
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <img alt="mock" src={mock_400h} className="home-image01" />
                        <Link to="/" className="home-text012">
                            Замовити
                        </Link>
                    </div>
                    <div className="home-frame06">
                        <span className="home-text013">
                            <span>700 грн</span>
                        </span>
                        <span className="home-text015">
                            <span>
                                <span>
                                    Букет з трояндами
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <img alt="mock" src={mock_400h} className="home-image02" />
                        <Link to="/" className="home-text019">
                            Замовити
                        </Link>
                    </div>
                    <div className="home-frame07">
                        <span className="home-text020">
                            <span>700 грн</span>
                        </span>
                        <span className="home-text022">
                            <span>
                                <span>
                                    Букет з трояндами
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <img alt="mock" src={mock_400h} className="home-image03" />
                        <Link to="/" className="home-text026">
                            Замовити
                        </Link>
                    </div>
                    <div className="home-frame08">
                        <span className="home-text027">
                            <span>700 грн</span>
                        </span>
                        <span className="home-text029">
                            <span>
                                <span>
                                    Букет з трояндами
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <img alt="mock" src={mock_400h} className="home-image04" />
                        <Link to="/" className="home-text033">
                            Замовити
                        </Link>
                    </div>
                </div>
                <span className="home-text034">
                    <span>Хіти продаж</span>
                </span>
                <Link to="/" className="home-text036">
                    <span>Переглянути більше</span>
                </Link>
                <img alt="left_arrow" src={left_arrow} className="home-image05" />
                <img alt="right_arrow" src={right_arrow} className="home-image06" />
            </div>
            <div className="home-frame09">
                <span className="home-text038">Акційні букети</span>
                <Link to="/" className="home-text039">
                    Переглянути більше
                </Link>
                <img alt="left_arrow" src={left_arrow} className="home-image07" />
                <img alt="right_arrow" src={right_arrow} className="home-image08" />
                <div className="home-carousel1">
                    <div className="home-frame10">
                        <span className="home-text040">
                            <span>700 грн</span>
                        </span>
                        <span className="home-text042">
                            <span>
                                <span>
                                    Букет з трояндами
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <img alt="mock" src={mock_400h} className="home-image09" />
                        <Link to="/" className="home-text046">
                            Замовити
                        </Link>
                    </div>
                    <div className="home-frame11">
                        <span className="home-text047">
                            <span>700 грн</span>
                        </span>
                        <span className="home-text049">
                            <span>
                                <span>
                                    Букет з трояндами
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <img alt="mock" src={mock_400h} className="home-image10" />
                        <Link to="/" className="home-text053">
                            Замовити
                        </Link>
                    </div>
                    <div className="home-frame12">
                        <span className="home-text054">
                            <span>700 грн</span>
                        </span>
                        <span className="home-text056">
                            <span>
                                <span>
                                    Букет з трояндами
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <img alt="mock" src={mock_400h} className="home-image11" />
                        <Link to="/" className="home-text060">
                            Замовити
                        </Link>
                    </div>
                    <div className="home-frame13">
                        <span className="home-text061">
                            <span>700 грн</span>
                        </span>
                        <span className="home-text063">
                            <span>
                                <span>
                                    Букет з трояндами
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                        </span>
                        <img alt="mock" src={mock_400h} className="home-image12" />
                        <Link to="/" className="home-text067">
                            Замовити
                        </Link>
                    </div>
                </div>
            </div>
            <div className="home-frame14">
                <div className="home-frame15">
                    <Link to="/catalog" className="home-navlink">
                        <img alt="img_5" src={img_5_600h} className="home-image13" />
                    </Link>
                    <span className="home-text068">
                        <span>КВІТКОВІ КОМПОЗИЦІЇ</span>
                    </span>
                </div>
                <div className="home-frame16">
                    <Link to="/catalog" className="home-navlink1">
                        <img alt="img_4" src={img_4_300h} className="home-image14" />
                    </Link>
                    <span className="home-text070">
                        <span>ПІВОНІЇ</span>
                    </span>
                </div>
                <div className="home-frame17">
                    <Link to="/catalog/monobukety" className="home-navlink2">
                        <img alt="img_3" src={img_3_300h} className="home-image15" />
                    </Link>
                    <span className="home-text072">
                        <span>МОНО-БУКЕТИ</span>
                    </span>
                </div>
                <div className="home-frame18">
                    <Link to="/catalog/sezonni bukety" className="home-navlink3">
                        <img alt="img_2" src={img_2_300h} className="home-image16" />
                    </Link>
                    <span className="home-text074">
                        <span>СЕЗОННІ БУКЕТИ</span>
                    </span>
                </div>
                <span className="home-text076">Каталог</span>
            </div>
            <div className="home-frame19">
                <div className="home-frame20">
                    <img
                        alt="img_6"
                        src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1f81c229-c941-496d-b5bb-86b506b962e1/23207eb8-f725-4920-a460-90ee6a254163?org_if_sml=1104552"
                        className="home-image17"
                    />
                    <span className="home-text077">
                        <span>
                            &quot;Від нашого серця до вашої душі ­– краса квітів, доставлена з любов&apos;ю&quot;.
                        </span>
                    </span>
                    <span className="home-text079">
                        <span>
                            <span>
                                <span>
                                    Звичайних слів не завжди вистачає, щоб виразити почуття, які викликає краса квітів.
                                    Тому ми створили наш інтернет-магазин, щоб допомогти вам відчути цю красу на повну.
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                            <br></br>
                            <span></span>
                            <br></br>
                            <span>
                                <span>
                                    У нашому магазині ви знайдете тільки свіжі, якісні квіти, які підкреслять вашу
                                    особистість та створять неповторну атмосферу. Ми робимо кожен букет з любов&apos;ю і
                                    відповідальністю, тому що знаємо, що кожна квітка має свою історію та енергію.
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                                <span>
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: " ",
                                        }}
                                    />
                                </span>
                            </span>
                            <br></br>
                            <span></span>
                            <br></br>
                            <span>Замовляйте у нас і переконайтеся, що краса може бути дійсно безмежною.</span>
                        </span>
                    </span>
                    <span className="home-text094">
                        <span>Наші цінності</span>
                    </span>
                </div>
            </div>
            <div className="home-frame21">
                <span className="home-text096">
                    <span>Інформацію по догляду та опис квітів читати тут</span>
                </span>
                <Link to="/" className="home-navlink4">
                    <div className="home-frame22">
                        <img
                            alt="ellipse"
                            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1f81c229-c941-496d-b5bb-86b506b962e1/bbf81a9c-c21f-4e95-9ea6-ad5f1cd3bb0e?org_if_sml=1404"
                        />
                        <img alt="pointer" src={pointer} className="home-image19" />
                    </div>
                </Link>
                <img
                    alt="img_8"
                    src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/1f81c229-c941-496d-b5bb-86b506b962e1/607cba0b-1065-4e8b-9f82-af9ef71e72c1?org_if_sml=111526"
                    className="home-image20"
                />
                <img alt="img_7" src={img_7_700w} className="home-image21" />
                <Link to="/" className="home-navlink5">
                    <div className="home-frame23">
                        <span className="home-text098">Особливості еустом: </span>
                        <span className="home-text099">читати</span>
                    </div>
                </Link>
                <Link to="/" className="home-navlink6">
                    <div className="home-frame24">
                        <span className="home-text100">
                            <span>
                                Правила догляду за тюльпанами:
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: " ",
                                    }}
                                />
                            </span>
                             <span>
                                <span
                                    dangerouslySetInnerHTML={{
                                        __html: " ",
                                    }}
                                />
                            </span>
                        </span>
                        <span className="home-text103">читати</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
