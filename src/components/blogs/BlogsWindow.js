import React from 'react';
import ReactDOM from 'react-dom';
import BlogPage from './Blogs';
import "./Blogsbutton.css"

function MyComponent() {
  const handleClick = () => {
    const newWindow = window.open('', 'blogpage');
    newWindow.document.title = 'Blogs';
    ReactDOM.render(<BlogPage/>, newWindow.document.body);
  };

  return (
    <div className='blog-button-div'>
      <button class='blogreadwrite-button' onClick={handleClick}>Explore Blogs</button>
    </div>
  );
}

export default MyComponent;