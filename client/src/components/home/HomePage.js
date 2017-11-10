import React from 'react';
import { Link } from 'react-router';

class HomePage extends React.Component {
	render() {
		return (
			<div className="jumbotron" >
				<h1>ANPanorama!!!</h1>
				<p>Welcome to my canvas. I color this with my thoughts</p>
				<Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
			</div>
		);
	}
}

export default HomePage;
