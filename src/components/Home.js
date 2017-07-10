import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Home extends Component {
	render() {
		return (
			<Grid>
            <Row>
              <Col lg={12}>
               <p>Home</p>
              </Col>
            </Row>
          </Grid>
		);
	}
}

export default Home;