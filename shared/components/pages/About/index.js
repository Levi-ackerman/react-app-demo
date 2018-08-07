import React from 'react'
import Helmet from 'react-helmet'

import P from '../../atoms/P'

function AboutRoute(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Helmet>
        <title>About</title>
      </Helmet>

      <P>
        {`Welcome to the ${props.location.pathname} page! `}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </P>
    </div>
  )
}

export default AboutRoute
