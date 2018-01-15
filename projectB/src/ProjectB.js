import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class ProjectB extends React.Component {
	render() {
		return (
			<Router basename="/projectb">
				<div>
					<nav>
						<Link to="/">Project B - 1</Link>
						<Link to="/page2">Project B - 2</Link>
						<Link to="/page3">Project B - 3</Link>
					</nav>
					<Route exact path="/" render={() => <h1>I am "Project B" page 1</h1>}></Route>
					<Route path="/page2" render={() => <h1>I am "Project B" page 2</h1>}></Route>
					<Route path="/page3" render={() => <h1>I am "Project B" page 3</h1>}></Route>
				</div>
			</Router>
		);
	}
}

export default ProjectB;
