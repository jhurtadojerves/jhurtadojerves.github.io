/** Layout Component to Home */

/** Libraries import */
import React from 'react'

/** Other Components imports */

/** Assets imports */

import '../assets/css/Home.css'
import 'normalize.css'

const Home = props => {
  return(
    <div className="Home">
      { props.children }
    </div>
  )
}

export default Home