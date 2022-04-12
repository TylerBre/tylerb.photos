import React from "react"
import { Link } from "gatsby"

const Layout = props => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <button
            className="nav-burger"
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </button>
          <nav className="site-head-left">
            <ul className="nav">
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/store`}>Store</Link>
              </li>
              <li>
                <a
                  href="https://tylerbreland.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <a
              className="button outline large"
              href="mailto:hello@tylerbreland.com"
            >
              Contact
            </a>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} {title}
      </footer>
    </div>
  )
}

export default Layout
