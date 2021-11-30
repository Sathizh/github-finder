import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
// import Useritem from "./components/users/UserItem";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import Alert from "./components/layout/Alert";
import { About } from "./components/pages/About";
import User from "./components/users/User";
class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };

  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   // console.log(res.data);
  //   this.setState({ users: res.data, loading: false });

  //   // axios.get("https://api.github.com/users").then(res=>console.log(res.data));
  // }
  // search GitHub users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    // console.log(text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // console.log(res);
    this.setState({ users: res.data.items, loading: false });
  };
  // getUser
  getUser = async (username) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  };
  // clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  // set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  // hey = () => "Sathizh";
  render() {
    const { users, user, loading } = this.state;
    // const name = "sathish";
    // const loading = true;
    // const showName = false;
    // const num = [1, 2, 3, 4, 5];
    return (
      <Router>
        <div className='App'>
          {/* {loading ? (
          <p>Hey {showName && name.toUpperCase()}</p>
        ) : (
          <p>Loading...</p>
        )} */}
          {/* <h1 className='h1 text-red-600'>hi from appjs</h1> */}
          <Navbar name='GitHub Finder' />

          <div className='container mx-auto'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/'>
                <Fragment>
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              </Route>
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login'>
                <Users getUser={this.getUser} user={user} loading={loading} />
              </Route>
            </Switch>
          </div>
          {/* <Useritem /> */}
        </div>
      </Router>
    );
  }
}

export default App;
