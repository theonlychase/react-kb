import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  height: 400,
  width: 400,
  margin: 0 + ' auto',
  textAlign: 'center',
};

const customButton = {
	display: 'block',
};

class Categories extends Component {
// SINGLE LINE INPUT FOR THE TEXT AREA
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		value: '',
	// 		list: []
	// 	};
	// }

	// handleChange = (event) => {
	// 	this.setState({
	// 		value: event.target.value
	// 	});
	// }

	// handleClick = (event) => {
	// 	const list = [...this.state.list, this.state.value];
	// 	this.setState({
	// 		list: list,
	// 		value: ''
	// 	});
	// 	event.preventDefault();
	// }

	// keyPress = (event) => {
 //      if(event.keyCode === 13){
 //        const list = [...this.state.list, this.state.value];
	// 	this.setState({
	// 		list: list,
	// 		value: ''
	// 	});
	// 	event.preventDefault();
 //      }
 //   }

	// render() {
	// 	const {list} = this.state;
	// 	return (
	// 		<Grid>
	// 			<Row>
	// 				<Col xs={12}>
	// 					<Paper style={style} zDepth={3}>
	// 						<TextField
	// 							hintText="Hint Text"
	// 							floatingLabelText="Floating Label Text"
	// 							value={this.state.value}
	// 							onChange={this.handleChange}
	// 							onKeyDown={this.keyPress}
	// 						/>
							
	// 						<RaisedButton label="Primary" fullWidth={false} onClick={this.handleClick} primary={true} style={customButton} />
	// 					</Paper>
	// 					{list.map((item, i) => (
	// 							<p key={i}>{item}</p>
	// 					))}
	// 				</Col>
	// 			</Row>
	// 		</Grid>
	// 	);
	// }

// MULTIPLE LINE INPUT FOR TEXTAREA

constructor(props) {
		super(props);

		this.state = {
			user: {
				email: '',
				password: ''
			},
			users: []
		};
	}

	handleChange = (event) => {
		const user = this.state.user;
		user[event.target.name] = event.target.value;
		this.setState({
			user
		});
	}

	handleClick = (event) => {
		const users = [...this.state.users, this.state.user];
		this.setState({
			users,
			user: {
				email: '',
				password: ''
			}
		});
		event.preventDefault();
	}

	keyPress = (event) => {
      if(event.keyCode === 13){
        const users = [...this.state.users, this.state.user];
		this.setState({
			users,
			user: {
				email: '',
				password: ''
			}
		});
		event.preventDefault();
      }
   }

	render() {
		const users = this.state.users;
		return (
			<Grid>
				<Row>
					<Col xs={12}>
						<Paper style={style} zDepth={3}>
							<TextField
								hintText="Hint Text"
								floatingLabelText="Floating Label Text"
								value={this.state.user.email}
								name="email"
								onChange={this.handleChange}
								onKeyDown={this.keyPress}
							/>
							<TextField
								hintText="Hint Text"
								floatingLabelText="Floating Label Text"
								value={this.state.user.password}
								name="password"
								onChange={this.handleChange}
								onKeyDown={this.keyPress}
							/>
							
							<RaisedButton label="Primary" fullWidth={false} onClick={this.handleClick} primary={true} style={customButton} />
						</Paper>
					</Col>
					<Col xs={6}>
						<ul>
							{users.map((user, i) => (
								<li key={i}>{user.email}</li>
							))}
						</ul>
					</Col>
					<Col xs={6}>
						<ul>
							{users.map((user, i) => (
								<li key={i}>{user.password}</li>
							))}
						</ul>
					</Col>
				</Row>
			</Grid>
		);
	} 
}

export default Categories;