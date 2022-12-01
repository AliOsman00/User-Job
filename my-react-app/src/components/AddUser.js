import React, {Component} from "react";
import posed from 'react-pose';
import uniqid from 'uniqid';
import UserConsumer from "../context";

const Animation = posed.div({
    visible: {
        opacity: 1,
        applyAtStart: {
            display: "block"
        }
    },
    hidden: {
        opacity: 0.5,
        applyAtEnd: {
            display: "none"
        }
    }
});

class AddUser extends Component {
    state = {
        visible: false,
        name: "",
        department: "",
        salary: ""
    }
    changeVisibility = (e) => {
        this.setState({
            visible: !this.state.visible
        })
    }
    // changeName = (e) => {
    //     this.setState({
    //         name: e.target.value
    //     })
    // }
    // changeDepartment = (e) => {
    //     this.setState({
    //         department: e.target.value
    //     })
    // }
    // changeSalary = (e) => {
    //     this.setState({
    //         salary: e.target.value
    //     })
    // }
    changeInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    addNewUser = (dispatch, e) => {
        e.preventDefault();
        const {name, department, salary} = this.state;

        const newUser = {
            id: uniqid(),
            name,
            department,
            salary
        }
        dispatch({type : "ADD_USER", payload:newUser});
    }

    render() {
        const {visible, name, department, salary} = this.state;
        return ( 
            <UserConsumer>
                {
                    value => {
                        const{dispatch} = value;
                        return(
                            <div className="col-md-8 mb-4">
                                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{visible ? "Hide Form" : "Show Form"}</button>
                                <Animation pose={visible? "visible" : "hidden"}>
                                    <div className="card">
                                        <div className="card-header">
                                            <h4>Add User Form</h4>
                                        </div>
                                        <div className="card-body">
                                            <form action="" onSubmit={this.addNewUser.bind(this, dispatch)} autoComplete="off">
                                                <div className="form-group">
                                                    <label htmlFor="name">Name</label>
                                                    <input 
                                                        type="text"
                                                        name="name" 
                                                        id="id"
                                                        placeholder="Enter Name"
                                                        className="form-control"
                                                        value={name}
                                                        onChange={this.changeInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="department">Department</label>
                                                    <input 
                                                        type="text"
                                                        name="department" 
                                                        id="id"
                                                        placeholder="Enter Department"
                                                        className="form-control"
                                                        value={department}
                                                        onChange={this.changeInput}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="salary">Salary</label>
                                                    <input 
                                                        type="text"
                                                        name="salary" 
                                                        id="id"
                                                        placeholder="Enter Salary"
                                                        className="form-control"
                                                        value={salary}
                                                        onChange={this.changeInput}
                                                    />
                                                </div>
                                                <button className="btn btn-danger btn-block" type="submit" onClick={this.addNewUser}>Add User</button>
                                            </form>
                                        </div>
                                    </div>
                                </Animation>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

export default AddUser;