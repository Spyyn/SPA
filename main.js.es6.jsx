var React = require('react');

var TestElement = React.createClass({
  displayName: 'test-element',
  render: () => {
    return (
      <h1>React, JSX and Harmony are all a-go!</h1>
    )
  }
});

React.render(React.createElement(TestElement), document.querySelector('body'));
