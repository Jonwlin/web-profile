import React, {Component} from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './Profile.css';

export default class Profile extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={6} md={3} xsOffset={3} mdOffset={2}>
            <Image src="/web-profile/profile_pic_pro.JPG" rounded responsive/>
          </Col>
          <Col xs={10} md={5} xsOffset={1} mdOffset={0}>
            <h4 className="profile-content">Hey! I am a 3rd year Data Science major with Computer Science focus and an Economics Minor at UC San Diego. I am excited to be the first class of undergraduate data scientists at my school.
            However, my curriculum actually is equal parts Data Science and Computer Science. I am interested in learning how to effectively integrate data with the software projects that I work on.
            Over the summer, I took classes on computer vision and machine learning in addition to learning how to build a full-stack web app. </h4>
            <h4 className="profile-content">I love learning about anything new and different so reach out if you have an opportunity. I'm actively looking for a 2019 Summer Internship or a part time project during the school year. Email me at Jwlin17@gmail.com!</h4>
          </Col>
        </Row>
      </Grid>
    );
  }
}
