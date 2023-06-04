import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './catalog.css'

const Catalog = (props) => {
  return (
    <div className="catalog-container">
      <Helmet>
        <title>Catalog - Rosella</title>
        <meta property="og:title" content="Catalog - Rosella" />
      </Helmet>
      <Header rootClassName="header-root-class-name5"></Header>
      <div className="catalog-frame"></div>
      <span className="catalog-text">
        <span>
          <span>
            {' '}
            Букети / Сезонні букети
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </span>
      <span className="catalog-text04">
        <span>Сезонні букети</span>
      </span>
      <div className="catalog-frame01">
        <div data-thq="thq-dropdown" className="catalog-dropdown">
          <div
            data-thq="thq-dropdown-toggle"
            className="catalog-dropdown-toggle"
          >
            <span className="catalog-text06">Ціна</span>
            <div
              data-thq="thq-dropdown-arrow"
              className="catalog-dropdown-arrow"
            >
              <img
                alt="down_arrow"
                src="/catalog/down_arrow.svg"
                viewBox="0 0 1024 1024"
                className="catalog-image"
              />
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="catalog-dropdown-list">
            <li data-thq="thq-dropdown" className="catalog-dropdown01">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle01"
              >
                <input type="checkbox" className="catalog-checkbox" />
                <span className="catalog-text07">до 500 грн</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown02">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle02"
              >
                <input type="checkbox" className="catalog-checkbox01" />
                <span className="catalog-text08">500-800 грн</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown03">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle03"
              >
                <input type="checkbox" className="catalog-checkbox02" />
                <span className="catalog-text09">800-1500 грн</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown04">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle04"
              >
                <input type="checkbox" className="catalog-checkbox03" />
                <span className="catalog-text10">1500-3000 грн</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown05">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle05"
              >
                <input type="checkbox" className="catalog-checkbox04" />
                <span className="catalog-text11">3000-5000 грн</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown06">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle06"
              >
                <input type="checkbox" className="catalog-checkbox05" />
                <span className="catalog-text12">від 5000 грн</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown07">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle07"
              >
                <button className="catalog-button">Застосувати</button>
              </div>
            </li>
          </ul>
        </div>
        <div data-thq="thq-dropdown" className="catalog-thq-dropdown">
          <div
            data-thq="thq-dropdown-toggle"
            className="catalog-dropdown-toggle08"
          >
            <span className="catalog-text13">
              <span>Розмір</span>
              <br></br>
            </span>
            <div
              data-thq="thq-dropdown-arrow"
              className="catalog-dropdown-arrow1"
            >
              <img
                alt="down_arrow"
                src="/catalog/down_arrow.svg"
                viewBox="0 0 1024 1024"
                className="catalog-image01"
              />
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="catalog-dropdown-list1">
            <li data-thq="thq-dropdown" className="catalog-dropdown08">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle09"
              >
                <input type="checkbox" className="catalog-checkbox06" />
                <span className="catalog-text16">S (маленький)</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown09">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle10"
              >
                <input type="checkbox" className="catalog-checkbox07" />
                <span className="catalog-text17">M (середній)</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown10">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle11"
              >
                <input type="checkbox" className="catalog-checkbox08" />
                <span className="catalog-text18">L (великий)</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown11">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle12"
              >
                <input type="checkbox" className="catalog-checkbox09" />
                <span className="catalog-text19">XL (величезний)</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown12">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle13"
              >
                <button className="catalog-button1">Застосувати</button>
              </div>
            </li>
          </ul>
        </div>
        <div data-thq="thq-dropdown" className="catalog-thq-dropdown1">
          <div
            data-thq="thq-dropdown-toggle"
            className="catalog-dropdown-toggle14"
          >
            <span className="catalog-text20">
              <span>Колір</span>
              <br></br>
            </span>
            <div
              data-thq="thq-dropdown-arrow"
              className="catalog-dropdown-arrow2"
            >
              <img
                alt="down_arrow"
                src="/catalog/down_arrow.svg"
                viewBox="0 0 1024 1024"
                className="catalog-image02"
              />
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="catalog-dropdown-list2">
            <li data-thq="thq-dropdown" className="catalog-dropdown13">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle15"
              >
                <input type="checkbox" className="catalog-checkbox10" />
                <span className="catalog-text23">Червоний</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown14">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle16"
              >
                <input type="checkbox" className="catalog-checkbox11" />
                <span className="catalog-text24">Білий</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown15">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle17"
              >
                <input type="checkbox" className="catalog-checkbox12" />
                <span className="catalog-text25">Рожевий</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown16">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle18"
              >
                <input type="checkbox" className="catalog-checkbox13" />
                <span className="catalog-text26">Жовтий</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown17">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle19"
              >
                <input type="checkbox" className="catalog-checkbox14" />
                <span className="catalog-text27">Зелений</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown18">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle20"
              >
                <input type="checkbox" className="catalog-checkbox15" />
                <span className="catalog-text28">Блакитний</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown19">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle21"
              >
                <input type="checkbox" className="catalog-checkbox16" />
                <span className="catalog-text29">Кремовий</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown20">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle22"
              >
                <input type="checkbox" className="catalog-checkbox17" />
                <span className="catalog-text30">Помаранчевий</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown21">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle23"
              >
                <input type="checkbox" className="catalog-checkbox18" />
                <span className="catalog-text31">Фіолетовий</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown22">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle24"
              >
                <input type="checkbox" className="catalog-checkbox19" />
                <span className="catalog-text32">Чорний</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown23">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle25"
              >
                <button className="catalog-button2">Застосувати</button>
              </div>
            </li>
          </ul>
        </div>
        <div data-thq="thq-dropdown" className="catalog-thq-dropdown2">
          <div
            data-thq="thq-dropdown-toggle"
            className="catalog-dropdown-toggle26"
          >
            <span className="catalog-text33">
              <span>Привід</span>
              <br></br>
            </span>
            <div
              data-thq="thq-dropdown-arrow"
              className="catalog-dropdown-arrow3"
            >
              <img
                alt="down_arrow"
                src="/catalog/down_arrow.svg"
                viewBox="0 0 1024 1024"
                className="catalog-image03"
              />
            </div>
          </div>
          <ul data-thq="thq-dropdown-list" className="catalog-dropdown-list3">
            <li data-thq="thq-dropdown" className="catalog-dropdown24">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle27"
              >
                <span className="catalog-text36">Особистий</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown25">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle28"
              >
                <input type="checkbox" className="catalog-checkbox20" />
                <span className="catalog-text37">Весілля</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown26">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle29"
              >
                <input type="checkbox" className="catalog-checkbox21" />
                <span className="catalog-text38">День народження</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown27">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle30"
              >
                <input type="checkbox" className="catalog-checkbox22" />
                <span className="catalog-text39">Кохаю</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown28">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle31"
              >
                <input type="checkbox" className="catalog-checkbox23" />
                <span className="catalog-text40">Народження дитини</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown29">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle32"
              >
                <div className="catalog-frame02"></div>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown30">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle33"
              >
                <span className="catalog-text41">Календарний</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown31">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle34"
              >
                <input type="checkbox" className="catalog-checkbox24" />
                <span className="catalog-text42">14 лютого</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown32">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle35"
              >
                <input type="checkbox" className="catalog-checkbox25" />
                <span className="catalog-text43">8 березня</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown33">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle36"
              >
                <input type="checkbox" className="catalog-checkbox26" />
                <span className="catalog-text44">День матері</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown34">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle37"
              >
                <input type="checkbox" className="catalog-checkbox27" />
                <span className="catalog-text45">Новорічний декор</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown35">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle38"
              >
                <button className="catalog-button3">Застосувати</button>
              </div>
            </li>
          </ul>
        </div>
        <div data-thq="thq-dropdown" className="catalog-thq-dropdown3">
          <div
            data-thq="thq-dropdown-toggle"
            className="catalog-dropdown-toggle39"
          >
            <div
              data-thq="thq-dropdown-arrow"
              className="catalog-dropdown-arrow4"
            >
              <img
                alt="down_arrow"
                src="/catalog/down_arrow.svg"
                viewBox="0 0 1024 1024"
                className="catalog-image04"
              />
            </div>
            <span className="catalog-text46">
              <span>Відсортувати за:</span>
            </span>
            <span className="catalog-text48">
              <span>Спочатку дешевше</span>
            </span>
          </div>
          <ul data-thq="thq-dropdown-list" className="catalog-dropdown-list4">
            <li data-thq="thq-dropdown" className="catalog-dropdown36">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle40"
              >
                <span className="catalog-text50">Популярні</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown37">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle41"
              >
                <span className="catalog-text51">Спочатку дорожче</span>
              </div>
            </li>
            <li data-thq="thq-dropdown" className="catalog-dropdown38">
              <div
                data-thq="thq-dropdown-toggle"
                className="catalog-dropdown-toggle42"
              >
                <span className="catalog-text52">Новинки</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="catalog-frame03">
        <div className="catalog-frame04">
          <span className="catalog-text53">
            <span>300-500 грн</span>
          </span>
          <img
            alt="cross"
            src="/catalog/cross.svg"
            className="catalog-image05"
          />
        </div>
        <div className="catalog-frame05">
          <span className="catalog-text55">
            <span>S (маленький)</span>
          </span>
          <img
            alt="cross"
            src="/catalog/cross.svg"
            className="catalog-image06"
          />
        </div>
        <div className="catalog-frame06">
          <span className="catalog-text57">
            <span>Червоний</span>
          </span>
          <img
            alt="cross"
            src="/catalog/cross.svg"
            className="catalog-image07"
          />
        </div>
        <div className="catalog-frame07">
          <span className="catalog-text59">
            <span>День народження</span>
          </span>
          <img
            alt="cross"
            src="/catalog/cross.svg"
            className="catalog-image08"
          />
        </div>
        <span className="catalog-text61">
          <span>Скинути фільтри</span>
        </span>
      </div>
      <div className="catalog-frame08">
        <div className="catalog-frame09">
          <span className="catalog-text63">
            <span>700 грн</span>
          </span>
          <span className="catalog-text65">
            <span>
              <span>
                Букет з трояндами
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <img
            alt="mock"
            src="/home/img/mock-400h.png"
            className="catalog-image09"
          />
          <Link to="/" className="catalog-text69">
            Замовити
          </Link>
        </div>
        <div className="catalog-frame10">
          <span className="catalog-text70">
            <span>700 грн</span>
          </span>
          <span className="catalog-text72">
            <span>
              <span>
                Букет з трояндами
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <img
            alt="mock"
            src="/home/img/mock-400h.png"
            className="catalog-image10"
          />
          <Link to="/" className="catalog-text76">
            Замовити
          </Link>
        </div>
        <div className="catalog-frame11">
          <span className="catalog-text77">
            <span>700 грн</span>
          </span>
          <span className="catalog-text79">
            <span>
              <span>
                Букет з трояндами
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <img
            alt="mock"
            src="/home/img/mock-400h.png"
            className="catalog-image11"
          />
          <Link to="/" className="catalog-text83">
            Замовити
          </Link>
        </div>
        <div className="catalog-frame12">
          <span className="catalog-text84">
            <span>700 грн</span>
          </span>
          <span className="catalog-text86">
            <span>
              <span>
                Букет з трояндами
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
          <img
            alt="mock"
            src="/home/img/mock-400h.png"
            className="catalog-image12"
          />
          <Link to="/" className="catalog-text90">
            Замовити
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Catalog
