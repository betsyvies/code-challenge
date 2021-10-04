import { useState } from 'react';
import { getUserGists } from './queries/user'

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
    <div>
      <h1>Blog</h1>
      <p>Explore the unknown. Uncover what matters. Prototype, test, repeat. Combine intuition with evidence. Design with intent and build it right.</p>
      <form onSubmit={handleSearch}>
        <label htmlFor="userName">
          <input type="text" name="userName" onChange={handleChange} />
        </label>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default BlogPost;