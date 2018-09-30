import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';

export default class Profile extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={4} mdOffset={4}>
            <Image src="/web-github-iso/profile_pic_pro.JPG" rounded responsive/>
          </Col>
        </Row>
      </Grid>

    );
  }
}
