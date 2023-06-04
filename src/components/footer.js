import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-container ${props.rootClassName} `}>
      <div className="footer-frame">
        <div className="footer-frame01">
          <div className="footer-frame02">
            <span className="footer-text">
              <span className="">Про компанію</span>
            </span>
            <div className="footer-frame03">
              <Link to="/" className="footer-text02">
                {props.text}
              </Link>
              <Link to="/" className="footer-text03">
                {props.text1}
              </Link>
              <Link to="/" className="footer-text04">
                {props.text11}
              </Link>
              <Link to="/" className="footer-text05">
                {props.text111}
              </Link>
            </div>
          </div>
          <div className="footer-frame04">
            <span className="footer-text06">
              <span className="">Клієнтам</span>
            </span>
            <div className="footer-frame05">
              <Link to="/" className="footer-text08">
                {props.text2}
              </Link>
              <Link to="/" className="footer-text09">
                {props.text21}
              </Link>
              <Link to="/" className="footer-text10">
                {props.text211}
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
            <a
              href="mailto:rosellaua@gmail.com?subject="
              className="footer-link1"
            >
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
                className="footer-link2"
              >
                <img
                  alt="facebook"
                  src="/footer/facebook.svg"
                  className="footer-image"
                />
              </a>
              <div className="footer-frame11">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link3"
                >
                  <img
                    alt="instagram"
                    src="/footer/instagram.svg"
                    className="footer-image1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  text3: 'Link',
  link_text11: 'https://example.com',
  text: 'Доставка і оплата',
  text11: 'Про нас',
  text21: 'Заміна та повернення',
  link_text111: 'https://example.com',
  link_text211: 'https://example.com',
  rootClassName: '',
  link_text1: 'https://example.com',
  text2: 'Обробка персональних даних',
  link_text21: 'https://example.com',
  text1: 'Догляд та опис квітів',
  text211: 'Публічний договір',
  link_text3: 'https://example.com',
  text111: 'Відгуки',
  link_text: 'https://example.com',
  link_text2: 'https://example.com',
}

Footer.propTypes = {
  text3: PropTypes.string,
  link_text11: PropTypes.string,
  text: PropTypes.string,
  text11: PropTypes.string,
  text21: PropTypes.string,
  link_text111: PropTypes.string,
  link_text211: PropTypes.string,
  rootClassName: PropTypes.string,
  link_text1: PropTypes.string,
  text2: PropTypes.string,
  link_text21: PropTypes.string,
  text1: PropTypes.string,
  text211: PropTypes.string,
  link_text3: PropTypes.string,
  text111: PropTypes.string,
  link_text: PropTypes.string,
  link_text2: PropTypes.string,
}

export default Footer
