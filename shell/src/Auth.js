import React from 'react';
import Shell from './Shell'

class Auth extends React.Component {
	constructor(){
		super();
		this.state = {data: []}
	}
	componentDidMount(){
		fetch( 'http://localhost:3003/users' )
			.then( response => response.json() )
			.then( data => this.setState({data}))
	}
	changeUser(e){
		const id = e.target.value;
		if(id){
			fetch( `http://localhost:3003/users/${id}` )
				.then( response => response.json() )
				.then( user => this.setState({user}))
		}
	}
	logout(){
		// yes, this is as lazy as humanly possible.
		window.location = "/"
	}
	render(){
		if(!this.state.data){
			return <div>Loading...</div>
		}
		if(!this.state.user){
			return (
				<div>
				<select onChange={this.changeUser.bind(this)}>
					<option value={null}>Select a user...</option>
					{this.state.data.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
				</select>
				</div>
			)
		}
		else {
			return <Shell user={this.state.user} logout={this.logout.bind(this)} />
		}
	}
}

export default Auth;