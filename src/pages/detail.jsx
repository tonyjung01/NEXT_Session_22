import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const imgRefs = useRef([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      const posts = JSON.parse(storedPosts);
      const foundPost = posts.find(post => post.id === id);
      if (foundPost) {
        setPost(foundPost);
      }
    }
  }, [id]);

  const handleImageClick = (index) => {
    const newSrc = prompt('새로운 이미지 URL을 입력하세요:', post.pictures[index]);
    if (newSrc) {
      const updatedPictures = [...post.pictures];
      updatedPictures[index] = newSrc;
      const updatedPost = { ...post, pictures: updatedPictures };
      setPost(updatedPost);
      
      const storedPosts = JSON.parse(localStorage.getItem('posts'));
      const updatedPosts = storedPosts.map(p => p.id === post.id ? updatedPost : p);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
    }
  };

  if (!post) return <div>로딩 중...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {post.pictures.map((pic, index) => (
        <img
          key={index}
          ref={el => imgRefs.current[index] = el}
          src={pic}
          alt={`pic-${index}`}
          width="200"
          onClick={() => handleImageClick(index)}
          style={{ cursor: 'pointer' }}
        />
      ))}
    </div>
  );
};

export default Detail;
