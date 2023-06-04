import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className={`header-container ${props.rootClassName} `}>
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
            <Link to="/" className="header-navlink">
              <img
                alt="account"
                src="/header/account.svg"
                className="header-image"
              />
            </Link>
            <Link to="/" className="header-navlink1">
              <img
                alt="cart"
                src="/header/cart.svg"
                className="header-image1"
              />
            </Link>
          </div>
          <div className="header-frame04">
            <Link to="/" className="header-navlink2">
              <div className="header-frame05">
                <img
                  alt="rose_1"
                  src="/header/rose_1.svg"
                  className="header-image2"
                />
                <img
                  alt="rose_2"
                  src="/header/rose_2.svg"
                  className="header-image3"
                />
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
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle"
              >
                <Link to="/" className="header-text13">
                  <span className="">Букети</span>
                  <br className=""></br>
                </Link>
              </div>
              <ul data-thq="thq-dropdown-list" className="header-dropdown-list">
                <li data-thq="thq-dropdown" className="header-dropdown01">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle01"
                  >
                    <div className="header-frame09">
                      <div className="header-frame10">
                        <Link to="/" className="header-text16">
                          {props.text}
                        </Link>
                        <Link to="/" className="header-text17">
                          {props.text2}
                        </Link>
                        <Link to="/" className="header-text18">
                          {props.text21}
                        </Link>
                        <Link to="/" className="header-text19">
                          {props.text211}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div data-thq="thq-dropdown" className="header-dropdown02">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle02"
              >
                <Link to="/" className="header-text20">
                  <span className="">Троянди</span>
                  <br className=""></br>
                </Link>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="header-dropdown-list1"
              >
                <li data-thq="thq-dropdown" className="header-dropdown03">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle03"
                  >
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
                        {props.text3}
                      </Link>
                      <Link to="/" className="header-text27">
                        {props.text31}
                      </Link>
                      <Link to="/" className="header-text28">
                        {props.text311}
                      </Link>
                      <Link to="/" className="header-text29">
                        {props.text3111}
                      </Link>
                      <Link to="/" className="header-text30">
                        {props.text31111}
                      </Link>
                      <Link to="/" className="header-text31">
                        {props.text311111}
                      </Link>
                      <Link to="/" className="header-text32">
                        {props.text3111111}
                      </Link>
                      <Link to="/" className="header-text33">
                        {props.text31111111}
                      </Link>
                      <Link to="/" className="header-text34">
                        {props.text311111111}
                      </Link>
                      <Link to="/" className="header-text35">
                        {props.text3111111111}
                      </Link>
                      <Link to="/" className="header-text36">
                        {props.text31111111111}
                      </Link>
                      <Link to="/" className="header-text37">
                        {props.text311111111111}
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div data-thq="thq-dropdown" className="header-dropdown04">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle04"
              >
                <Link to="/" className="header-text38">
                  <span className="">Квіти</span>
                  <br className=""></br>
                </Link>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="header-dropdown-list2"
              >
                <li data-thq="thq-dropdown" className="header-dropdown05">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle05"
                  >
                    <div className="header-frame13">
                      <div className="header-frame14">
                        <Link to="/" className="header-text41">
                          {props.text4}
                        </Link>
                        <Link to="/" className="header-text42">
                          {props.text42}
                        </Link>
                        <Link to="/" className="header-text43">
                          {props.text421}
                        </Link>
                        <Link to="/" className="header-text44">
                          {props.text4211}
                        </Link>
                        <Link to="/" className="header-text45">
                          {props.text42111}
                        </Link>
                        <Link to="/" className="header-text46">
                          {props.text421111}
                        </Link>
                        <Link to="/" className="header-text47">
                          {props.text4211112}
                        </Link>
                        <Link to="/" className="header-text48">
                          {props.text42111121}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div data-thq="thq-dropdown" className="header-dropdown06">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle06"
              >
                <Link to="/" className="header-text49">
                  <span className="">Квіткові композиції</span>
                  <br className=""></br>
                </Link>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="header-dropdown-list3"
              >
                <li data-thq="thq-dropdown" className="header-dropdown07">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle07"
                  >
                    <div className="header-frame15">
                      <div className="header-frame16">
                        <Link to="/" className="header-text52">
                          {props.text5}
                        </Link>
                        <Link to="/" className="header-text53">
                          {props.text51}
                        </Link>
                        <Link to="/" className="header-text54">
                          {props.text511}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div data-thq="thq-dropdown" className="header-dropdown08">
              <div
                data-thq="thq-dropdown-toggle"
                className="header-dropdown-toggle08"
              >
                <Link to="/" className="header-text55">
                  <span className="">Привід</span>
                  <br className=""></br>
                </Link>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="header-dropdown-list4"
              >
                <li data-thq="thq-dropdown" className="header-dropdown09">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-dropdown-toggle09"
                  >
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
                          {props.text6}
                        </Link>
                        <Link to="/" className="header-text64">
                          {props.text61}
                        </Link>
                        <Link to="/" className="header-text65">
                          {props.text611}
                        </Link>
                        <Link to="/" className="header-text66">
                          {props.text6111}
                        </Link>
                      </div>
                      <div className="header-frame20">
                        <Link to="/" className="header-text67">
                          {props.text7}
                        </Link>
                        <Link to="/" className="header-text68">
                          {props.text71}
                        </Link>
                        <Link to="/" className="header-text69">
                          {props.text711}
                        </Link>
                        <Link to="/" className="header-text70">
                          {props.text7111}
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
  )
}

Header.defaultProps = {
  text4211112: 'Альстромерії',
  text42111121: 'Гіпсофіла',
  text311111111: 'Місцеві троянди',
  text42: 'Тюльпани',
  text: 'Патріотичні букети',
  text311: '101 троянда',
  text421111: 'Хризантеми',
  text7111: 'Новорічний декор',
  text3111111111: 'Імпортні троянди',
  text21: 'Сезонні букети',
  text7: '14 лютого',
  text31111: 'Червоні троянди',
  text511: 'Квіти у формі серця',
  text311111111111: 'Піоновидні троянди',
  text5: 'Квіти в коробці',
  text51: 'Квіти в корзинці',
  text2: 'Монобукети',
  text6111: 'Кохаю',
  text611: 'Народження дитини',
  text4: 'Троянди',
  text61: 'День народження',
  text311111: 'Рожеві троянди',
  text31111111: 'Кремові троянди',
  text421: 'Півонії',
  text3111: 'Білі троянди',
  rootClassName: '',
  text211: 'Авторські букети',
  text71: '8 березня',
  text31: '51 троянда',
  text3: '25 троянд',
  text4211: 'Еустоми',
  text6: 'Весілля',
  text3111111: 'Жовті троянди',
  text42111: 'Гортензії',
  text711: 'День матері',
  text31111111111: 'Кущові троянди',
}

Header.propTypes = {
  text4211112: PropTypes.string,
  text42111121: PropTypes.string,
  text311111111: PropTypes.string,
  text42: PropTypes.string,
  text: PropTypes.string,
  text311: PropTypes.string,
  text421111: PropTypes.string,
  text7111: PropTypes.string,
  text3111111111: PropTypes.string,
  text21: PropTypes.string,
  text7: PropTypes.string,
  text31111: PropTypes.string,
  text511: PropTypes.string,
  text311111111111: PropTypes.string,
  text5: PropTypes.string,
  text51: PropTypes.string,
  text2: PropTypes.string,
  text6111: PropTypes.string,
  text611: PropTypes.string,
  text4: PropTypes.string,
  text61: PropTypes.string,
  text311111: PropTypes.string,
  text31111111: PropTypes.string,
  text421: PropTypes.string,
  text3111: PropTypes.string,
  rootClassName: PropTypes.string,
  text211: PropTypes.string,
  text71: PropTypes.string,
  text31: PropTypes.string,
  text3: PropTypes.string,
  text4211: PropTypes.string,
  text6: PropTypes.string,
  text3111111: PropTypes.string,
  text42111: PropTypes.string,
  text711: PropTypes.string,
  text31111111111: PropTypes.string,
}

export default Header
