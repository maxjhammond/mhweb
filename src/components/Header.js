import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/max_logo.svg'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="content">
      <div className="inner">
        <h1>MH Web</h1>
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
      <svg className="logo blink" viewBox="0 0 3000 3000">
        <g>
        <path fill="none" stroke="currentColor" d="M1439.9,1269.7c-204.9,256-409.8,512-615.5,769.1c-2.7-3.1-5-5.7-7.2-8.4c-71.9-89.3-143.7-178.7-215.6-268
            c-130.3-162.1-260.6-324.1-391.1-486.1c-4.5-5.5-6.4-11-6.4-18.1c0.2-218,0.1-436,0.1-653.9c0-3.2,0-6.4,0-9.7
            c0.7-0.3,1.3-0.6,2-0.9c20.6,25,40.7,50.4,61.1,75.6c20.5,25.4,40.9,50.9,61.4,76.4c20.5,25.5,40.9,50.9,61.4,76.4
            c20.5,25.5,40.9,50.9,61.4,76.4c20.7,25.7,41.4,51.4,62,77.1c20.5,25.5,40.9,50.9,61.4,76.4c20.5,25.5,40.9,50.9,61.4,76.3
            c20.5,25.5,40.9,50.9,61.4,76.4c20.5,25.4,41,50.9,61.4,76.3c20.4,25.4,40.9,50.8,61.8,76.8c2.8-3.2,4.9-5.7,7-8.2
            c204-251.2,408-502.4,611.7-753.8c6.1-7.6,12.3-10.2,21.8-10.2c140.3,0.3,280.6,0.2,421,0.2c4.9,0,9.8,0,15.6,0
            c0,242.4,0,483.6,0,726c26.3,1,51.8,0.3,77.3,0.4c25.7,0.1,51.3,0,77,0c25.7,0,51.3,0,77,0c25.7,0,51.3,0,77,0s51.3,0,77,0
            c25.7,0,51.3,0,77,0c26,0,52,0,78,0c25.7,0,51.3,0,77,0c25.7,0,51.3,0,77,0s51.3,0,77,0c25.7,0,51.3,0,77,0c25.7,0,51.3,0,77,0
            c25.6,0,51.2,0,77.6,0c0,127.6,0,254.3,0,382.4c-334,0-667.8,0-1002.6,0c0,258.1,0,514.9,0,772.3c-152.3,0-303.4,0-456.1,0
            c-0.1-31,0-61.5-0.1-92c0-30.7,0-61.3,0-92s0-61.3,0-92s0-61.3,0-92c0-30.7,0-61.3,0-92c0-30.7,0-61.3,0-92c0-31,0-62,0-93
            c0-30.7,0-61.3,0-92s0-61.3,0-92c0-30.7,0-61.3,0-92c0-30.7,0-61.3,0-92s0-61.3,0-92c0-30.6,0-61.1,0-91.7
            C1441.4,1270.2,1440.7,1269.9,1439.9,1269.7z"/>
        </g>
    </svg>

  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
