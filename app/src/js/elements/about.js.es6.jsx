var React = require('react'),
    Router = require('react-router');

var { RouteHandler, Route, Link, DefaultRoute } = Router;

var About = React.createClass({
  displayName: 'about',

  render: () => {
    return (
      <div className="row">
        <div>Spyyn is a thing!</div>
      </div>
    )
  }
});

module.exports = About;
