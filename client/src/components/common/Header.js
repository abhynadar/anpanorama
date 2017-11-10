import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({loading}) => {
	return (
		<div className="header clearfix">
		<nav>
			<ul className="nav nav-pills pull-right">
			{loading && <li role="presentation"  activeClassName="active" ><Link to="" >Loading...</Link></li>}
			<li role="presentation" activeClassName="active" ><IndexLink to="/" >Home</IndexLink></li>
			<li role="presentation" activeClassName="active" ><Link to="/learn-with-me" activeClassName="active" >Learn with me</Link></li>
			<li role="presentation" activeClassName="active" ><Link to="/thoughts" activeClassName="active" >Thoughts</Link></li>
			<li role="presentation" activeClassName="active" ><Link to="/about" activeClassName="active" >About</Link></li>
			</ul>
		</nav>
		<h3 className="text-muted">ANPanorama</h3>
		</div>
		);
};

Header.propTypes = {
	loading: React.PropTypes.bool.isRequired
};

export default Header;
