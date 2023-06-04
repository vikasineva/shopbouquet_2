import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './product.css'

const Product = (props) => {
  return (
    <div className="product-container">
      <Helmet>
        <title>Product - Rosella</title>
        <meta property="og:title" content="Product - Rosella" />
      </Helmet>
      <Header rootClassName="header-root-class-name4"></Header>
      <div className="product-frame"></div>
      <div className="product-frame01">
        <span className="product-text">
          <span>
            {' '}
            Квіти / Cезонні букети / Букет “Весняний”
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="product-text02">
          <span>Букет “Весняний”</span>
        </span>
        <span className="product-text04">
          <span>1250 грн</span>
        </span>
        <span className="product-text06">
          <span>немає в наявності</span>
        </span>
        <span className="product-text08">
          <span>артикул: 2234</span>
        </span>
        <span className="product-text10">
          <span>Опис</span>
        </span>
        <span className="product-text12">
          <span>
            Склад
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="product-text14">
          <span>
            Висота: 50 см
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
        <span className="product-text16">
          <span>Діаметр: 60 см</span>
        </span>
        <a
          href="https://example.com"
          target="_blank"
          rel="noreferrer noopener"
          className="product-link"
        >
          Замовити
        </a>
        <div className="product-frame02">
          <span className="product-text18">1</span>
          <span className="product-text19">+</span>
          <span className="product-text20">-</span>
        </div>
        <span className="product-text21">M</span>
        <span className="product-text22">
          <span>Розмір:</span>
        </span>
        <span className="product-text24">
          <span>
            Цей букет наповнений свіжістю, кольором і ніжністю, що нагадує про
            наближення весняного пробудження.
          </span>
        </span>
        <div className="product-frame03">
          <div className="product-frame04">
            <img
              src="/home/img/mock-600w.png"
              alt="mock"
              className="product-image"
            />
            <span className="product-text26">
              <span>Троянди</span>
            </span>
          </div>
        </div>
        <img
          src="/home/img/mock-600w.png"
          alt="mock"
          className="product-image1"
        />
      </div>
      <div className="product-frame05">
        <span className="product-text28">
          <span>Схожі товари</span>
        </span>
        <img
          alt="left_arrow."
          src="/home/left_arrow.svg"
          className="product-image2"
        />
        <img
          alt="right_arrow"
          src="/home/right_arrow.svg"
          className="product-image3"
        />
        <div className="product-frame06">
          <div className="product-frame07">
            <span className="product-text30">
              <span>700 грн</span>
            </span>
            <span className="product-text32">
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
              src="/home/img/mock-600w.png"
              className="product-image4"
            />
            <Link to="/" className="product-text36">
              Замовити
            </Link>
          </div>
          <div className="product-frame08">
            <span className="product-text37">
              <span>700 грн</span>
            </span>
            <span className="product-text39">
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
              src="/home/img/mock-600w.png"
              className="product-image5"
            />
            <Link to="/" className="product-text43">
              Замовити
            </Link>
          </div>
          <div className="product-frame09">
            <span className="product-text44">
              <span>700 грн</span>
            </span>
            <span className="product-text46">
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
              src="/home/img/mock-600w.png"
              className="product-image6"
            />
            <Link to="/" className="product-text50">
              Замовити
            </Link>
          </div>
          <div className="product-frame10">
            <span className="product-text51">
              <span>700 грн</span>
            </span>
            <span className="product-text53">
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
              src="/home/img/mock-600w.png"
              className="product-image7"
            />
            <Link to="/" className="product-text57">
              Замовити
            </Link>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Product
