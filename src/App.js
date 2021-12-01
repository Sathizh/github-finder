import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
// import Useritem from "./components/users/UserItem";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
import Alert from "./components/layout/Alert";
import { About } from "./components/pages/About";
import User from "./components/users/User";

import GithubState from "./contaxt/github/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

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

  // Get Single User
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };
  // Get User Repos
  const getUserRepos = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };
  // clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };
  // set alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  // hey = () => "Sathizh";
  // const name = "sathish";
  // const loading = true;
  // const showName = false;
  // const num = [1, 2, 3, 4, 5];
  return (
    <GithubState>
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
            <Alert alert={alert} />
            <Switch>
              <Route exact path='/'>
                <Fragment>
                  <Search
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={showAlert}
                  />
                  <Users loading={loading} users={users} />
                </Fragment>
              </Route>
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/user/:login'
                render={(props) => (
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
          {/* <Useritem /> */}
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
