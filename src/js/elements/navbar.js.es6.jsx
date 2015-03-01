var React = require('react'),
    Router = require('react-router');

var { RouteHandler, Route, Link, DefaultRoute } = Router;

var NavBar = React.createClass({
  render: () => {
    return (
      <div className="container">
        <nav className='navbar navbar-default navbar-fixed-top'>
          <div className='container-fluid'>
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                <img alt="Spyyn" src="build/images/spyyn.gif"></img>
              </a>
              <a className="navbar-brand" href="#">Spyyn</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#about">About</a></li>
              <li><a href="#who">Who are we?</a></li>
            </ul>
          </div>          
        </nav>
      <RouteHandler/>
      </div>
    )
  }
});

module.exports = NavBar;
