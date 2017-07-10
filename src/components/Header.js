import React, { Component } from 'react';
import { AppBar, Drawer } from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import CommunicationContactPhone from 'material-ui/svg-icons/communication/contact-phone';
import ActionQuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import MapsDirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import {green500} from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import { NavLink } from "react-router-dom";

const color = {
  backgroundColor: green500
}

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () =>  this.setState({open: false}); 

   render() {
    return (
      <div>
      	<Drawer 
      		open={this.state.open}
      		docked={false}
      		onRequestChange={(open) => this.setState({open})}
      	>
          <List>
          <ListItem primaryText={<img alt="boxout-logo" src="http://i.imgur.com/CwE36WU.png" />} />
          <Divider />
            <NavLink 
              style={{ textDecoration: 'none'}} 
              to='/'
            >
              <ListItem onTouchTap={this.handleClose.bind(this)} primaryText="Home" leftIcon={<ActionHome color={green500}/>} />
            </NavLink>
            <NavLink 
              style={{ textDecoration: 'none'}} 
              to='/company-directory'
            >
              <ListItem onTouchTap={this.handleClose.bind(this)} primaryText="Company Directory" leftIcon={<CommunicationContactPhone color={green500}/>} />
            </NavLink>
            <NavLink 
              style={{ textDecoration: 'none'}} 
              to='/how-we-do-stuff'
            >
              <ListItem onTouchTap={this.handleClose.bind(this)} primaryText="How We Do Stuff" leftIcon={<ActionQuestionAnswer color={green500}/>} />
            </NavLink>
            <NavLink 
              style={{ textDecoration: 'none'}} 
              to='/training'
            >
              <ListItem onTouchTap={this.handleClose.bind(this)} primaryText="Training" leftIcon={<MapsDirectionsRun  color={green500}/>} />
            </NavLink>
          </List>
        </Drawer>
         <AppBar
        style={color}
		    title="BoxOut Knowledgebase"
		    iconClassNameRight="muidocs-icon-navigation-expand-more"
		    onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
		  />
      </div>
    );
  }
}

export default Header;