var React = require('react'),
    Router = require('react-router');

var { RouteHandler, Route, Link, DefaultRoute } = Router;

var Main = React.createClass({
  displayName: 'main',
  render: () => {
    return (
      <div>
        <h1>Main</h1>

        <RouteHandler/>
      </div>
    );
  }
});

var Child = React.createClass({
  displayName: 'child',
  render: () => {
    return (
      <div>
        <div>child</div>
      </div>
    );
  }
});

var routes = (
  <Route path='/' handler={Main}>
    <Route name='child' handler={Child}/>
  </Route>
);

var containerEl = document.querySelector('#container');
Router.run(routes, function (Handler) {
  React.render(<Handler/>, containerEl);
});
