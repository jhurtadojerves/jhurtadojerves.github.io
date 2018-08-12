/** Layout Component to Portfolio */
import React from 'react'

/** Other Components imports */
import Article from './Article'

/** Assets import */
import '../assets/css/Portfolio.css'

const Portfolio = props => {
  const { projects } = props

  return (
    <section className="Portfolio">
      <div className="Portafolio-container">
      {
        projects.map(project => (
          <Article 
            {...project}
            key={ project.id }
          />
        ))
      }
      </div>
    </section>
  )
}

export default Portfolio