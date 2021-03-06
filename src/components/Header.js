import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>MX Web</h1>
        <p>Modern website design and development</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
    <svg className="logo blink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 3177 1100" fill="none" stroke="currentColor" strokeWidth="20">
      <path d="M3061.1,983.7l-332.6-332.6c-7.3-7.3-17.2-11.4-27.5-11.4h-310c-34.6,0-51.9-41.8-27.5-66.3l103.6-103.6l353.5-353.5
          c24.5-24.5,7.1-66.3-27.5-66.3h-470.3c-10.3,0-20.2,4.1-27.5,11.4l-179.1,179.1c-15.2,15.2-39.8,15.2-54.9,0L1882.3,61.4
          c-7.3-7.3-17.2-11.4-27.5-11.4h-710.7c-34.6,0-51.9,41.8-27.5,66.3l332.6,332.6c7.3,7.3,17.2,11.4,27.5,11.4h419.8l-9.6,9.6
          l-169.9,169.9l-100.7,100.7c-15.2,15.2-39.8,15.2-54.9,0l-100.7-100.7l-169.9-169.9L882.3,61.4c-7.3-7.3-17.2-11.4-27.5-11.4H384.5
          c-34.6,0-51.9,41.8-27.5,66.3l353.5,353.5l103.6,103.6c24.5,24.5,7.1,66.3-27.5,66.3h-310c-10.3,0-20.2,4.1-27.5,11.4L116.8,983.7
          c-24.5,24.5-7.1,66.3,27.5,66.3h710.7c10.3,0,20.2-4.1,27.5-11.4l171.1-171.1c15.2-15.2,39.8-15.2,54.9,0l171.1,171.1
          c7.3,7.3,17.2,11.4,27.5,11.4h0H1871l0,0c10.3,0,20.2-4.1,27.5-11.4l171.1-171.1c15.2-15.2,39.8-15.2,54.9,0l171.1,171.1
          c7.3,7.3,17.2,11.4,27.5,11.4h710.7C3068.2,1050,3085.5,1008.2,3061.1,983.7z"/>
    </svg>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
