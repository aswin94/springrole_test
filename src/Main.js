import React from 'react';

import { Row, Col, InputGroup, InputGroupAddon, Input, Table, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import axios from "axios/index";
import { Link } from 'react-router-dom'
import './App.css';



class Main extends React.PureComponent {

    constructor() {

        super();

        this.pageSize = 5;
        this.pagesCount = Math.ceil(100 / this.pageSize);

        this.state = {
            currentPage: 0,
            tableData: [],
            searchValue:'',
            pagesCount: 0
        };

    }

    handleClick(e, index) {

        e.preventDefault();

        this.setState({
            currentPage: index
        });

    }

    componentDidMount() {
        let dataAPI = 'http://demo9197058.mockable.io/users';
        axios.get(dataAPI).then(res => {
            console.log(res.data);
            this.setState({tableData: res.data})
        });
    }

    updateInputValue = (e) => {
        this.setState({
            searchValue: e.target.value
        });
    };


    tableSearch = (searchValue) => {
        return(x) => {
            return x.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                x.company_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                x.last_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                x.city.toLowerCase().includes(searchValue.toLowerCase()) ||
                x.state.toLowerCase().includes(searchValue.toLowerCase()) ||
                x.email.toLowerCase().includes(searchValue.toLowerCase()) ||
                x.web.toLowerCase().includes(searchValue.toLowerCase()) ||
                x.age.toString().includes(searchValue.toString()) ||
                x.zip.toString().includes(searchValue.toString()) || !searchValue;
        }
    };

    render() {

        const { currentPage } = this.state;

        return (

            <React.Fragment>
                <div>
                    <div>
                        <h1 style={{backgroundColor: "#2F95F3",color:"white",padding: '1%'}}>User Table</h1>
                    </div>
                    <div style={{padding: '3%'}}>
                        <Row style={{marginBottom:'2%'}}>
                            <Col md="9">
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Search</InputGroupAddon>
                                    <Input placeholder="Search with Any Value" value={this.state.searchValue} onChange={this.updateInputValue}/>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Table responsive bordered hover size="sm">
                            <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Company Name</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Zip</th>
                                <th>Email</th>
                                <th>Web</th>
                                <th>Age</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.tableData
                                .filter(this.tableSearch(this.state.searchValue))
                                .slice(
                                    currentPage * this.pageSize,
                                    (currentPage + 1) * this.pageSize
                                )
                                .map((data, i) =>
                                    <tr key = {i}>
                                        <th>
                                            <Link to={{pathname:'/user/' + data.id, state: {data: data}}}>
                                                {data.first_name}
                                            </Link>
                                        </th>
                                        <th>{data.last_name}</th>
                                        <th>{data.company_name}</th>
                                        <th>{data.city}</th>
                                        <th>{data.state}</th>
                                        <th>{data.zip}</th>
                                        <th>{data.email}</th>
                                        <th>{data.web}</th>
                                        <th>{data.age}</th>
                                    </tr>
                                )}
                            </tbody>
                        </Table>

                        <div className="pagination-wrapper">

                            <Pagination aria-label="Page navigation example">

                                <PaginationItem disabled={currentPage <= 0}>

                                    <PaginationLink
                                        onClick={e => this.handleClick(e, currentPage - 1)}
                                        previous
                                        href="#"
                                    />


                                </PaginationItem>

                                {[...Array(this.pagesCount)].map((page, i) =>
                                    <PaginationItem active={i === currentPage} key={i}>
                                        <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                            {i + 1}
                                        </PaginationLink>
                                    </PaginationItem>
                                )}

                                <PaginationItem disabled={currentPage >= this.pagesCount - 1}>

                                    <PaginationLink
                                        onClick={e => this.handleClick(e, currentPage + 1)}
                                        next
                                        href="#"
                                    />

                                </PaginationItem>

                            </Pagination>

                        </div>
                    </div>
                </div>

            </React.Fragment>

        );

    }

}

export default Main;