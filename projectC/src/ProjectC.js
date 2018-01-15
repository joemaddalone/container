import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class ProjectC extends React.Component {
	render() {
		return (
			<Router basename="/projectc">
				<div>
					<nav>
						<Link to="/">Project C - 1</Link>
						<Link to="/page2">Project C - 2</Link>
						<Link to="/page2">Project C - 3</Link>
					</nav>
					<Route exact path="/" render={() => <h1>I am "Project C" page 1</h1>}></Route>
					<Route path="/page2" render={() => <h1>I am "Project C" page 2</h1>}></Route>
					<Route path="/page3" render={() => <h1>I am "Project C" page 3</h1>}></Route>
				</div>
			</Router>
		);
	}
}

export default ProjectC;
