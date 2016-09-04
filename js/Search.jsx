const React = require('react')
const data = require('../public/data.json')

const Search = () => (
  <div className='container'>
    {data.shows.map((show) => (
      <h3>{show.title}</h3>
    ))}
  </div>
)

module.exports = Search
