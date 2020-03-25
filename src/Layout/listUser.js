import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/theme.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios';

class ListUser extends React.Component {
    constructor() {
        super();
        this.state = {
            user: [],
            activePage: 3,

        }
    }

    componentDidMount() {
        axios.get('http://localhost/api/users').then(res => {
            this.setState({user: res.data})
        })
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    onDelete(user_id) {
        axios.delete('http://localhost/api/users/delete' + user_id).then(response => {
            var user = this.state.user;
            for (var i = 0; i < user.length; i++) {
                if (user[i].id == user_id) {
                    user.splice(i, 1);
                    this.setState({user: user});
                }
            }
        });
    }

    render() {
        return (

            <Router>
                <div className="main-content">
                    <div className="col-md-12 table-list-user">
                        <h3 className="title-5 m-b-35">Table User</h3>
                        <div className="table-data__tool">
                            <div className="table-data__tool-right">

                            </div>
                        </div>
                        <div className="table-responsive table-responsive-data2">
                            <table className="table table-data2">
                                <thead>
                                <tr className='title-table'>
                                    <th>ID_User</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>created_at</th>
                                    <th>created_update</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>{
                                    this.state.user.map(user => {
                                        return (
                                            <tr className="tr-shadow" key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.name}</td>
                                                <td>
                                                    <span className="block-email"></span>
                                                    {user.email}
                                                </td>
                                                <td>{user.created_at}</td>
                                                <td>{user.updated_at}</td>
                                                <td>
                                                    <div className="table-data-feature">
                                                        <button className="item" data-toggle="tooltip"
                                                                data-placement="top" title=""
                                                                data-original-title="Edit">
                                                            <i className="zmdi zmdi-edit"></i>
                                                        </button>

                                                        <button className="item" data-toggle="tooltip"
                                                                data-placement="top" title=""
                                                                data-original-title="Delete"
                                                                onClick={this.onDelete.bind(this, user.id)}>
                                                            <i className="zmdi zmdi-delete"></i>
                                                        </button>
                                                        <button className="item" data-toggle="tooltip"
                                                                data-placement="top" title=""
                                                                data-original-title="More">
                                                            <i className="zmdi zmdi-more"></i>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                }

                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>

            </Router>

        );
    }
}

export default ListUser;
