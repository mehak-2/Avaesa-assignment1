import React from 'react';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import logo from '../images/logo.png';

const Home = () => {
  return (
    <div className='container'>
      <nav className="nav">
        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Courses</li>
        </ul>
        <ul>
          <li><button>Signup</button></li>
          <li><button>Login</button></li>
        </ul>
      </nav>
      
      <div className='content1'>
        <ul>
          <h1>Discover the Art of Journalism with Mr. Arun</h1>
          <h2>About Mr. Arun
      With decades of experience in the journalism industry, Mr. Arun has witnessed and reported on some of the most significant events in recent history. His insights and knowledge are invaluable to aspiring journalists looking to make their mark in the field.</h2>
          <p>Learn From Home, Anywhere .........</p>
        </ul>
        <img src={image1} className="image" alt="image" />
      </div>
      
      <div className='content2'>
        <img src={image2} className="image" alt="image" />
        <div className='courses'>
          <ul>
            <h1>What You'll Learn</h1>
            <li>Principles Of Journalism</li>
            <li>Interviewing Techniques</li>
            <li>Storytelling Strategies</li>
            <li>Ethical Reporting</li>
            <li>And much more</li>
            <p>Don't miss this opportunity to learn from a seasoned journalist. Enroll now!</p>
            <button>Enroll Now!</button>
          </ul>
        </div>
      </div>
      
      <div className="footer">
     <p>© 2024 Mr. Arun's Journalism Course. All rights reserved.</p> 
    </div>
    </div>
  );
};

export default Home;
