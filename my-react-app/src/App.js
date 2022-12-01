import React, {Component} from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import AddUser from './components/AddUser';
import './App.css';

class App extends Component {
  
  render() {
  return (
    <div className="App">
      {/* Lesson 1 */}
      {/* <h4>{1 + 1}</h4>
      <h4>{"ali".toUpperCase()}</h4>
      <h4>{test + 35}</h4>
      <div>
        {isAuth ? <p>Kullanici adi</p> : null}
      </div> */}


      {/* Lesson 2 */}
      {/* <User/> */}


      {/* Lesson 3 */}
      {/* <h4 className='header'>App Component</h4> */}


      {/* Lesson 4 */}
      {/* <Navbar/> */}


      {/* Lesson 5 */}
      <div className='container'>
        <Navbar title = "User App"/>
        <hr />
        <AddUser/>
        <Users/>
      </div>      
    </div>
  );
  }
}

export default App;
