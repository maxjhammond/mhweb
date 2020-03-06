import PropTypes from 'prop-types'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Main = props => {
  let close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  return (
    <StaticQuery
      query={graphql`
        query imageQuery {
          imageThree: file(relativePath: { eq: "03_spc_gry.png" }) {
            ...fluidImage
          }
        }
      `}
      render={data => (
        <div
          ref={props.setWrapperRef}
          id="main"
          style={props.timeout ? { display: 'flex' } : { display: 'none' }}
        >
          <article
            id="intro"
            className={`${props.article === 'intro' ? 'active' : ''} ${
              props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="major">Hey, I'm Max</h2>
            <p>
              I'm a professional web developer currently working and living in
              Manchester, UK. I work full time at an eCommerce agency creating
              high quality, responsive websites for a large, varied clientele.
            </p>
            <p>
              At the moment I'm looking to take on small to medium projects, and
              I'm offering full website builds, designs, technical support and
              style updates.
            </p>
            <p>
              Head to the about section to learn about my skill-set in greater
              detail!
            </p>
            <span className="image main">
              <Img fluid={data.imageThree.childImageSharp.fluid} />
            </span>
            {close}
          </article>

          <article
            id="work"
            className={`${props.article === 'work' ? 'active' : ''} ${
              props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="major">Work</h2>
            <p>
              Below you can find a list of some of the projects I have provided
              front end development for as part of my full time employment.
            </p>
            <div className="project-list">
              <ul>
                <li>
                  <a
                    href="https://herdy.co.uk"
                    title="Herdy"
                    target="_blank"
                    rel="_nofollow"
                  >
                    Herdy
                  </a>
                </li>
                <li>
                  <a
                    href="https://exercise.co.uk"
                    title="Exercise Fitness"
                    target="_blank"
                    rel="_nofollow"
                  >
                    Exercise.co.uk
                  </a>
                </li>
                <li>
                  <a
                    href="https://hestan.uk.com"
                    title="Hestan Cookware"
                    target="_blank"
                    rel="_nofollow"
                  >
                    Hestan Cookware
                  </a>
                </li>
                <li>
                  <a
                    href="https://anolon.co.uk"
                    title="Herdy"
                    target="_blank"
                    rel="_nofollow"
                  >
                    Anolon Cookware
                  </a>
                </li>
              </ul>
            </div>
            <p>
              I have also fully designed and developed a few small projects,
              including static builds such as{' '}
              <a href="scottypiano.com">scottypiano.com</a>, as well as a couple
              of now-offline sites for{' '}
              <a href="https://twitter.com/hypernightlive">Hypernight</a> and{' '}
              <a href="https://twitter.com/parkdtc">Park</a>.
            </p>
            <span className="image main">
              <Img fluid={data.imageThree.childImageSharp.fluid} />
            </span>
            {close}
          </article>

          <article
            id="about"
            className={`${props.article === 'about' ? 'active' : ''} ${
              props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="major">About</h2>
            <p>
              I am fluent with a range of technologies and software. Including,
              but not limited to the following:
            </p>
            <div className="project-list">
              <ul>
                <li>Javascript (ES6+)</li>
                <li>(S)CSS</li>
                <li>HTML5</li>
                <li>PHP7</li>
                <li>JSX</li>
                <li>XML</li>
                <li>Markdown</li>
                <li>Magento</li>
                <li>WordPress</li>
                <li>WooCommerce</li>
                <li>Gatsby.js</li>
                <li>React.js</li>
                <li>jQuery.js</li>
                <li>Knockout.js</li>
                <li>Node.js</li>
                <li>Gulp</li>
                <li>JetBrains</li>
                <li>VS Code</li>
                <li>Adobe Photoshop</li>
              </ul>
            </div>
            <p>
              I'm also familiar with some query languages such as GraphQL and
              MySQL, as well as creating Progressive Wep Apps.
            </p>
            <span className="image main">
              <Img fluid={data.imageThree.childImageSharp.fluid} />
            </span>
            {close}
          </article>

          <article
            id="contact"
            className={`${props.article === 'contact' ? 'active' : ''} ${
              props.articleTimeout ? 'timeout' : ''
            }`}
            style={{ display: 'none' }}
          >
            <h2 className="major">Get in touch</h2>
            <p>
              The best way to get in contact is to{' '}
              <a
                href="https://twitter.com/maxhweb"
                target="_blank"
                rel="nofollow"
              >
                Tweet
              </a>{' '}
              or <a href="mailto:maxhweb@gmail.com">email</a> me. Alternatively,
              you can fill out the form below.
            </p>
            <form
              action="/thank-you"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <p style={{ display: 'none' }}>
                <input name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
              </p>
              <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
              <ul className="actions">
                <li>
                  <button className="special">Send Message</button>
                </li>
                <li>
                  <input type="reset" value="Reset" />
                </li>
              </ul>
            </form>
            <ul className="icons">
              <li>
                <a
                  href="https://twitter.com/maxhweb"
                  className="icon fa-twitter"
                >
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="mailto:maxhweb@gmail.com" className="icon fa-envelope">
                  <span className="label">GitHub</span>
                </a>
              </li>
              <li>
                <a
                  href="https://u.magento.com/certification/directory/dev/2615888/"
                  className="icon fab fa-magento"
                >
                  <span className="label">Magento</span>
                </a>
              </li>
            </ul>
            {close}
          </article>
        </div>
      )}
    />
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
