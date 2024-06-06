import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  return (
    <div>
      <h1>블로그 포스트 목록</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          {post.pictures.map((pic, index) => (
            <img key={index} src={pic} alt={`pic-${index}`} width="100" />
          ))}
          <Link to={`/detail/${post.id}`}>자세히 보기</Link>
        </div>
      ))}
    </div>
  );
};

export default Main;
