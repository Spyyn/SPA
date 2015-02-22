var React = require('react'),
    Router = require('react-router');

var { RouteHandler, Route, Link, DefaultRoute } = Router;

var NavBar = React.createClass({
  displayName: 'navbar',
  render: () => {
    var horizontalFlex = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row'
    }

    return (
      <div className='navbar'>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          {/* Spyyn */}
          <div style={horizontalFlex}>
            <div><a href='#'><img src='build/images/spyyn.gif'/></a></div>
            <div><a href='#'><h1>Spyyn</h1></a></div>
          </div>

          <div style={horizontalFlex}>
            <div><a href="#about">about</a></div>
            <div><a href="#who">who are we?</a></div>
          </div>
        </nav>

        <RouteHandler/>
      </div>
    )
  }
});

module.exports = NavBar;
