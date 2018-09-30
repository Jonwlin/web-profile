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
        <Row>
          <Col xs={6} md={8} mdOffset={4}>
            <h4>"Hey! I'm a 3rd year Data Science major with Computer Science focus and an Economics Minor at UC San Diego. I am excited to be the first class of undergraduate data scientists at my school.
            However, my curriculum actually is equal parts Data Science and Computer Science. I am interested in learning how to effectively integrate data with the software projects that I work on.
            Over the summer, I took classes on computer vision and machine learning in addition to learning how to build a full-stack web app." </h4>
            <h4>"I love learning about anything new and different so reach out if you have an opportunity. I am actively looking for a 2019 Summer Internship or a part time project during the school year. Email me at Jwlin17@gmail.com!"</h4>
          </Col>
        </Row>
      </Grid>

    );
  }
}