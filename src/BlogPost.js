import { useState } from 'react';
import { getUserGists } from './queries/user'
import './BlogPost.scss';

const BlogPost = () => {
  const [userName, setUserName] = useState('');

  const handleChange = (e) => {
    const name = e.target.value;
    setUserName(name);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const data = await getUserGists(userName);
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="search-view">
      <div className="container-search-post">
        <h1>Blog</h1>
        <p>Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.</p>
        <form onSubmit={handleSearch}>
          <label htmlFor="userName" className='flex-start'>
            <span className="material-icons">
              search
            </span>
            <input
              type="text"
              name="userName"
              className='search'
              onChange={handleChange}
              placeholder='Keyword...'
            />
          </label>
          <div className='container-submit'>
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
      <div className="img-responsive" />
    </div>
  );
}

export default BlogPost;