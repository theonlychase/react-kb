import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class CompanyDirectory extends Component {
	render() {
		return (
			<Grid>
            <Row>
              <Col lg={12}>
               <h2>Company Directory</h2>
              </Col>
            </Row>
          </Grid>
		);
	}
}

export default CompanyDirectory;