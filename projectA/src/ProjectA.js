import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class ProjectA extends React.Component {
	render() {
		return (
			<Router basename="/projecta">
				<div>
					<nav>
						<Link to="/">Project A - 1</Link>
						<Link to="/page2">Project A - 2</Link>
						<Link to="/page2">Project A - 3</Link>
					</nav>
					<Route exact path="/" render={() => <h1>I am "Project A" page 1</h1>}></Route>
					<Route path="/page2" render={() => <h1>I am "Project A" page 2</h1>}></Route>
					<Route path="/page3" render={() => <h1>I am "Project A" page 3</h1>}></Route>
				</div>
			</Router>
		);
	}
}

export default ProjectA;
