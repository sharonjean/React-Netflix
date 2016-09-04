const React = require('react')
const data = require('../public/data.json')

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((show) => (
        <div className='show-card'>
          <img src={`public/img/posters/${show.poster}`} className='show-card-img' />
          <div className='show-card-text'>
            <h3 className='show-card-title'>{show.title}</h3>
            <h4 className='show-card-year'>({show.year})</h4>
            <h4 className='show-card-description'>{show.description}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
)

module.exports = Search
