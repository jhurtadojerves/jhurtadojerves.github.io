/** Layout Component to Portfolio */
import React from 'react'

/** Other Components imports */
import Icon from './Icon'

/** Assets import */
import '../assets/css/Article.css'


const Article = props => {
  const { id, image, name, description, url, github } = props
  return (
    <article className="Article" key={ id }>
      <div className="Article-links">
        <img src={ image } alt="" />
        <div className="Article-icons">
          <a href={ url } target="_blank">
            <Icon 
              name="open"
              title="Ver demo"
            />
          </a>
          <a href={ github } target="_blank">
            <Icon 
              name="github"
              title="Ver código"
            />
          </a>
        </div>
      </div>
      <div className="Article-content">
        <h2 className="Article-name">{ name }</h2>
        <p className="Article-description">{ description }</p>
      </div>
      
    </article>
  )
}

export default Article