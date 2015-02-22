var React = require('react');

var Main = React.createClass({
  displayName: 'main',
  render: () => {
    return (
      <h1>React, JSX and Harmony are all a-go-go!</h1>
    )
  }
});

var main = React.createElement(Main);
var containerEl = document.querySelector('#container');
React.render(main, containerEl);
