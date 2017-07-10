import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class HowWeDoStuff extends Component {
	render() {
		return (
			<Grid>
            <Row>
              <Col lg={12}>
               <h2>How We Do Stuff</h2>
              </Col>
            </Row>
          </Grid>
		);
	}
}

export default HowWeDoStuff;