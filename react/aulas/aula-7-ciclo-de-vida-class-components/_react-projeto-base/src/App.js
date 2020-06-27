import React, { Component } from 'react';
import Users from './components/users/Users';
import Toogle from './components/toogle/Toogle';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      users: [],
      showUsers: false,
    }
  }

  async componentDidMount() {
    console.log('componentDidMounnt de app.js')
    const res = await fetch('https://randomuser.me/api/?seed=rush&nat=br&results=10');
    const json = await res.json();
    this.setState({
      users: json.results,
    });
  }


  handleShowUsers = (isChecked) => {
    this.setState({showUsers: isChecked});
  }

  render() {
    //return <div>{JSON.stringify(this.state.users)}</div>;
    const {showUsers, users} = this.state;
    console.log(showUsers)
    return (
      <div>
        <h3>React LifeCycle</h3>
        <Toogle enable={showUsers} onToggle = {this.handleShowUsers} />
        <hr />
        {
        /* {showUsers && <div>Users</div>} */
        showUsers ? <Users users={users}/> : <div>Conteúdo bloqueado</div>
        }
      </div>
    )
  }
}
