var React = require('react'),
    Router = require('react-router');

var { RouteHandler, Route, Link, DefaultRoute } = Router;

var NavBar = React.createClass({
  displayName: 'navbar',
  render: () => {
    return (
      <span>
        <a href='#'><h1>Spyyn</h1></a>
        <nav>
          <ul>
            <li><a href="#about">about</a></li>
            <li><a href="#who">who are we?</a></li>
          </ul>
        </nav>

        <RouteHandler/>
      </span>
    )
  }
});

module.exports = NavBar;
