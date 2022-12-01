import React, {Component} from 'react';
import PropTypes from 'prop-types';
import UserConsumer from '../context';

class User extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false
        }
        // this.onClickEvent = this.onClickEvent.bind(this); normal binding
    }
    onClickEvent = (number, e) => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    // dispatch should come first because it is a send value in bind
    onDeleteUser = (dispatch, e) => {
        const {id} = this.props;
        // Consumer Dispatch
        dispatch({type : "DELETE_USER", payload:id});
    }
    componentWillUnmount() {
        console.log("Component Will Unmount");
    }

    render() {
        // Destructor
        const {name, department, salary} = this.props;
        const {isVisible} = this.state;

        return (
            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return(
                            <div className='col-md-8 mb-4'>
                                <div className="card" style={isVisible ? {backgroundColor: "#62848d", color : "#fff"} : null}>
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 69)}>{name}</h4>
                                        <i onClick={this.onDeleteUser.bind(this, dispatch)} className="fa fa-trash" style={{cursor: "pointer"}}></i>
                                    </div>
                                    {isVisible ? <div className="card-body">
                                        <p className="card-text">Maash: {salary}</p>
                                        <p className='card-text'>Department: {department}</p>
                                        {/* <p>{this.state.test}</p> */}
                                    </div> : null}
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}

// User.defaultProps = {
//     name: "Bilgi Yok",
//     department: "Bilgi Yok",
//     salary: "Bilgi Yok",
// }

User.propTypes = {
    name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
}

export default User;