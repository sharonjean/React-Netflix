const React = require('react')
const ShowCard = require('./ShowCard.jsx')
const data = require('../public/data.json')

const Search = () => (
  <div className='container'>
    <header className='header'>
      <h1 className='brand'>NewFlix</h1>
      <input className='search-input' type='text' placeholder='Search' />
    </header>
    <div className='shows'>
      {data.shows.map((show) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

module.exports = Search
