var React = require('react'),
    Router = require('react-router');

var { RouteHandler, Route, Link, DefaultRoute } = Router;

var Who = React.createClass({
  displayName: 'who',
  render: () => {
    return (
      <div>
        <div>We are people, not aliens!</div>
        <RouteHandler/>
      </div>
    )
  }
});

module.exports = Who;
