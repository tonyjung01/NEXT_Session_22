import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const initialPosts = [
  {
    id: '1',
    title: 'Barcelona',
    content: '바르셀로나 사진모음',
    pictures: ['/images/barcelona1.jpeg', '/images/barcelona2.jpeg', '/images/barcelona3.jpeg']
  },
  {
    id: '2',
    title: 'Granada',
    content: '그라나다 사진모음',
    pictures: ['/images/granada1.jpg', '/images/granada2.jpeg', '/images/granada3.jpg']
  },
  {
    id: '3',
    title: 'Sevilla',
    content: '세비야 사진 모음',
    pictures: ['/images/sevilla1.jpeg', '/images/sevilla2.jpeg', '/images/sevilla3.jpeg']
  }
];

if (!localStorage.getItem('posts')) {
  localStorage.setItem('posts', JSON.stringify(initialPosts));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
