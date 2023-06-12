import React from 'react'
import './ErrorPage.scss'
import ReactDOMServer from 'react-dom/server'

import ErrorImage from '../../assets/images/error.png'

function ErrorPage() {
  return (
    <div className="container error-page">
      <div className="main-div">
        <div className="_404-div">
          <div className="_404-not-found-number">404</div>
        </div>
        <div className="overlay-div">
          <div className="error-image">
            <img src={ErrorImage} alt="error-image" />
          </div>
          <div className="error-msg">
            <div className="error-header">
              Oops!
              <br />
              Page Not Found
            </div>
            <div className="error-body">
              <p>
                You have landed on my custom 404 page. Thanks for finding it.
              </p>
              <button onClick={() => (window.location.href = '/')}>
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const errorPageHtml = ReactDOMServer.renderToString(<ErrorPage />)
console.log(errorPageHtml)

export default ErrorPage
