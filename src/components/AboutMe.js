/** Layout Component to Header */
import React from 'react'

/** Other Components imports */
import SocialMedia from './IconList'

/** Assets import */
import '../assets/css/AboutMe.css'


const AboutMe = props => {
  const { title, paragraphs, socialmedia } = props
  return(
    <div className="About">
      <div className="About-social">
        <SocialMedia 
          data={ socialmedia }
        />
      </div>
      <h3 className="About-title">{ title }</h3>
      <div className="About-paragraphs">
        {
          paragraphs.map(paragraph => (
            <p key={ paragraph.id }>
              { paragraph.content }
            </p>
          ))
        }
      </div>
    </div>
  )
}

export default AboutMe