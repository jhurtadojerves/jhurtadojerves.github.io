/** Layout Component to Header */
import React from 'react'

/** Other Components imports */
import Icon from './Icon'

/** Assets import */
import '../assets/css/AboutIcons.css'


const IconList = props => {
  const { data } = props
  
  return (
    <div className="Icon-list">
      {
        data.map(social => {
          let { url, name, displayName } = social
          return (
            <a 
              href={ url }
              key={ name }
              target="_blank"
            >
              <Icon 
                name={ name }
                title={ displayName }
              />
          </a>
          )
        })
      }
    </div>
  )

}

export default IconList