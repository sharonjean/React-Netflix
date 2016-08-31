var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle.js')

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)
// var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: 'Props are great!', color: 'rebeccapurple'}),
    MyTitleFactory({title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    MyTitleFactory({title: 'Props are the best!', color: 'peru'})
    // ce(MyTitle, null)
    // React.createElement(MyTitle, {title: 'Use props everywhere!'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
