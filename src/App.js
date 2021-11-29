import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
// import Useritem from "./components/users/UserItem";
import Search from "./components/users/Search";
import Users from "./components/users/Users";
class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    // console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data);
    this.setState({ users: res.data, loading: false });

    // axios.get("https://api.github.com/users").then(res=>console.log(res.data));
  }

  // hey = () => "Sathizh";
  render() {
    // const name = "sathish";
    // const loading = true;
    // const showName = false;
    // const num = [1, 2, 3, 4, 5];
    return (
      <>
        {/* {loading ? (
          <p>Hey {showName && name.toUpperCase()}</p>
        ) : (
          <p>Loading...</p>
        )} */}
        {/* <h1 className='h1 text-red-600'>hi from appjs</h1> */}
        <Navbar name='GitHub Finder' />
        <div className='container mx-auto'>
          <Search />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
        {/* <Useritem /> */}
      </>
    );
  }
}

export default App;
