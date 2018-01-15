import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { ProjectA } from 'ProjectA';
import { ProjectB } from 'ProjectB';
import { ProjectC } from 'ProjectC';

class Shell extends React.Component {
	accessTo(proj) {
		return this.props.user.access.includes(proj)
	}
	render() {
		const { access } = this.props.user;
		return (
			<Router>
				<div className="app-container">
					<nav>
						<Link to="/">home</Link>
						{this.accessTo('A') && <Link to="/projecta">Project A</Link>}
						{this.accessTo('B') && <Link to="/projectb">Project B</Link>}
						{this.accessTo('C') && <Link to="/projectc">Project C</Link>}
						<button style={{ float: 'right' }} onClick={this.props.logout}>Logout</button>
					</nav>
					<div className="app-content">
						<Switch>
							<Route exact path="/" render={() => <h1>I am Shell</h1>}></Route>
							{this.accessTo('A') && <Route path="/projecta" render={() => <ProjectA />}></Route>}
							{this.accessTo('B') && <Route path="/projectb" render={() => <ProjectB />}></Route>}
							{this.accessTo('C') && <Route path="/projectc" render={() => <ProjectC />}></Route>}
							<Route render={() => <h1>page not found</h1>}></Route>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default Shell;
