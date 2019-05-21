import React, { Component } from 'react';
import {Container, Card, CardBody,
    Row, Col } from 'reactstrap';
import './App.css'
import { Link } from 'react-router-dom'



class userCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: this.props.location.state.data,
        };
    }

    render(){
        return(
            <div>
                <div>
                    <h1 style={{backgroundColor: "#2F95F3",color:"white",padding: '1%'}}><Link style={{margin: '0 2%',color: "white", textDecoration: 'none'}} to={'/'}>&#8592;</Link>User Details</h1>
                </div>
                <Container>
                    <Card className="user-card">
                        <CardBody>
                            <h2>{this.state.user.first_name} {this.state.user.last_name}</h2>
                            <Row>
                            <Col xs="6" className="user-card-details">
                                <h3><u>Company Details</u></h3>
                                <h4>Company : <span>{this.state.user.company_name}</span></h4>
                                <h4>City : <span>{this.state.user.city}</span></h4>
                                <h4>State : <span>{this.state.user.state}</span></h4>
                                <h4>Zip : <span>{this.state.user.zip}</span></h4>
                            </Col>
                            <Col xs="6" className="user-card-details">
                                <h3><u>Personal Details</u></h3>
                                <h4>Email : <span>{this.state.user.email}</span></h4>
                                <h4>Web : <span>{this.state.user.web}</span></h4>
                                <h4>Age : <span>{this.state.user.age}</span></h4>
                            </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        )
    }
}

export default userCard