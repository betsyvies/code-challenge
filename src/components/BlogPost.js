import React, { useState } from 'react';

import UserProfile from './UserProfile';
import Posts from './Posts';
import { getUser, getUserGists } from '../queries/user';
import './BlogPost.scss';

const BlogPost = () => {
  const [userName, setUserName] = useState('');
  const [userData, setUserData] = useState({
    user: {},
    gists: [],
  });

  const handleChange = (e) => setUserName(e.target.value);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { avatar_url, name } = await getUser(userName);
      const gists = await getUserGists(userName);
      setUserData({ user: { avatar: avatar_url, name }, gists });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="search-view">
      <div className="container-search-post">
        <h1>Blog</h1>
        <p>
          Explore the unknown. Uncover what matters.
          Prototype, test, repeat. Combine intuition with evidence.
          Design with intent and build it right.
        </p>
        <form onSubmit={handleSearch}>
          <label htmlFor="userName" className="flex-start">
            <span className="material-icons">
              search
            </span>
            <input
              type="text"
              name="userName"
              className="search"
              onChange={handleChange}
              placeholder="Keyword..."
            />
          </label>
          <div className={userData.user.name ? 'container-submit' : null}>
            <button type="submit">Search</button>
          </div>
          {
            userData.user.name ? (
              <>
                <UserProfile user={userData.user} />
                <Posts gists={userData.gists} />
              </>
            ) : null
          }
        </form>
      </div>
      <div className="img-responsive" />
    </div>
  );
};

export default BlogPost;
