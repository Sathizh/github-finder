import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

export const Repos = ({ repos }) => {
  return (
    <ul>
      {repos.map((repo) => (
        <div
          className='font-semibold mt-2 bg-gray-100 rounded-xl p-3'
          key={repo.id}>
          <RepoItem repo={repo} />
        </div>
      ))}
    </ul>
  );
};
Repos.propType = {
  repos: PropTypes.array.isRequired,
};
export default Repos;
