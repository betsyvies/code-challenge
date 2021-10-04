import { useState } from 'react';

const BlogPost = () => {
  const [userName, setUserName] = useState('');

  const handleChange = (e) => {
    const name = e.target.value;
    setUserName(name);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(userName);
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