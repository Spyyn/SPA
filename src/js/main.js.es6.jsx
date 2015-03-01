var React = require('react'),
    Router = require('react-router'),
    NavBar = require('./elements/navbar.js.es6.jsx'),
    Who = require('./elements/who.js.es6.jsx'),
    About = require('./elements/about.js.es6.jsx');

// get that style
require('../style/main.styl');

var { RouteHandler, Route, Link, DefaultRoute } = Router;

var routes = (
  <Route path='/' handler={NavBar}>
    <Route name='about' handler={About}/>
    <Route name='who' handler={Who}/>
  </Route>
);

var container = document.querySelector('#container-fluid');

Router.run(routes, function (Handler) {
  React.render(<Handler/>, container);
});
