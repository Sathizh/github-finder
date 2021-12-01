import React, { useEffect } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  // const { loading, repos } = this.props;
  if (loading) return <Spinner />;
  return (
    <>
      <Link to='/' className='p-0.5 ml-5 mt-5 bg-gray-200'>
        Back to Search
      </Link>
      <span className='block mt-6'>
        Hirable:{" "}
        {hireable ? (
          <i className='fas fa-check text-green-600' />
        ) : (
          <i className='fas fa-times-circle text-red-600' />
        )}
      </span>
      <div className='flex bg-gray-100 rounded-3xl p-3'>
        <div className='m-5'>
          <img src={avatar_url} alt='' className='rounded-full w-48' />
          <h1 className='font-bold text-xl'>{name}</h1>
          <i className='font-semibold'>{location}</i>
        </div>
        <div>
          {bio && (
            <>
              <h3 className='font-bold'>Bio</h3> <p>{bio}</p>
            </>
          )}
          <a
            href={html_url}
            className='p-1 float-right rounded-sm text-white bg-gray-800'>
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              {login && (
                <>
                  <strong>Username : </strong>
                  {login}
                </>
              )}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company : </strong>
                  {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Blog : </strong>
                  {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='flex text-center mt-2 bg-gray-100 rounded-xl p-3'>
        <div className='bg-blue-600 rounded-full mx-2 px-2 text-white font-semibold'>
          Followers : {followers}
        </div>
        <div className='bg-green-600 rounded-full mx-2 px-2 text-white font-semibold'>
          Following : {following}
        </div>
        <div className='bg-red-600 rounded-full mx-2 px-2 text-white font-semibold'>
          Public Repos : {public_repos}
        </div>
        <div className='bg-gray-900 rounded-full mx-2 px-2 text-white font-semibold'>
          Public Gists : {public_gists}
        </div>
      </div>
      <Repos repos={repos} />
    </>
  );
};
User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};
export default User;
