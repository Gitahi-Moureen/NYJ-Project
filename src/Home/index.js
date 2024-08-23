import React, { useState } from 'react';
import './style.css';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <img src='/Images/logo.png' alt='our logo'/>
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li className="nav-item"><em><a href="#">Home</a></em></li>
          <li className="nav-item"><a href="#">Videos</a></li>
          <li className="nav-item"><a href="#">Blogs</a></li>
          <li className="nav-item"><a href="#">Podcast</a></li>
          <li className="nav-item"><a href="#">Portfolio</a></li>
          <li className="close-menu-item" onClick={closeMenu}>
            <span className="close-button">&times;</span>
          </li>
        </ul>
        <button
          className={`hamburger-button ${isOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className="hero-section">
        <div className="hero-content">
        {/* <img src="Images/workimage.png" alt="work Image" className="workimage" /> */}
          <div>
            <p className="intro">Skills Of the future</p>
            <p className="skills">Technical expertise is just the opening act.<br/>
            The real stars are the skills that'll take you to the next level:
          </p> 
            <button className="learn-more" onClick={openModal}>
              Discover More
            </button>
          </div>
          <img src="/Images/workimage.png" alt="work Image" className="workimage" />
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="modal-close-button" onClick={closeModal}>
              &times;
            </span>
            <h2>Skill: Digital Fluency</h2>
            <p>
            In our increasingly digital world, the ability to effectively leverage technology, data, and digital tools will be essential. This includes skills like data analysis, digital communication, and the ability to quickly adapt to new technologies.
            </p>
          </div>
        </div>
      )}


<div className="vid">
                <h1>ChatGPT Season 1</h1>
                  <div className="vidLine1">
                <div><iframe src="https://www.loom.com/embed/b47031eddc2147a99aebaf32b006af92?sid=d5b32b52-3f4c-4d29-9f41-a2951c7327bc" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen className="video"></iframe>
                <p className="text"><b>Episode 1:</b>The development of ChatGPT</p>
</div>
<div><iframe src="https://www.loom.com/embed/c9a0867f680148cb96476650bb0948ff?sid=584fca13-1928-43cb-9466-1bd22077e4a9" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen className="video"></iframe>
                <p className="text"><b>Episode 2:</b> Architecture outline of chatGPT</p>
</div>
<div ><iframe src="https://www.loom.com/embed/a456880b8c98406db4da1612a303dcd2?sid=bea2c28f-5b66-4b68-988c-3e7f4a586e5b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen className="video"></iframe>
                <p className="text"><b>Episode 3:</b> Features of chatGPT and<br></br> how the product generates revenue.
</p>
</div>
</div>
<div className="vidLine2">
<div><iframe src="https://www.loom.com/embed/8299ce6892aa4416886aea8ab1467720?sid=6ad43d45-2767-44c5-8034-0c8dd936cc82" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen className="video"></iframe>
                <p className="text"><b>Episode 4: </b>Positive impacts and shortcomings <br></br>of chatGPT and the User experience.
</p>
</div>
                <div><iframe src="https://www.loom.com/embed/785e76518a494715a08761c75c05fb8f?sid=8a19a939-8a75-479f-9b82-36a43b386aac" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen className="video"></iframe>
                <p className="text"><b>Episode 5:</b> The use case and impact of chatGPT</p>
</div>
                </div>
                </div>

                <div>
            <div>
            <h1 className='heading'>Blogs</h1>
            </div>
            <div className='book-intro'>
            <img src="/image (5).png" alt='born a crime' className='book'/>
            <p className='title'>Born A Crime By Trevor Noah</p>
            </div>
            <p className='blogs'>Get Blogs</p>
            <div className='links'>
                <div>
                <img src="/image (4).png" alt='Trevor' className='trevor'/>
                <a href='https://born-a-crime.vercel.app/'className='learn'>Learn more</a>
                </div>
               <div>
               <img src="/image (4).png" alt='Trevor' className='trevor'/>
               <p className='learn2'>Learn more</p>
               </div>
               <div>
               <img src="/image (4).png" alt='Trevor' className='trevor'/>
               <p className='learn3'>Learn more</p>
               </div>
            </div>
        </div>

        <div>
            <div id= 'podcastlanding'>
            <div id = 'landingtext'>
                <h1>Podcast</h1>
                <h2>Where Stories Find Their Voices </h2>
            </div>
            <div className = 'hero'>
                <div>
                    <h3 className='stories'>Explore latest top-notch stories from world wide community and verified tech creators</h3>
                    <p>A podcast to discuss all the things related to the workplace and beyond.Examining the future of work, analyzing the potential impact of technological advancements and preparing listeners for the evolving nature of employment. Through insightful interviews with experts and successful professionals, the podcast aims to offer a well-rounded perspective on navigating the complexities of the modern workplace.</p>
                </div>
                <div>
                    <img src = '/Images/podcast_image-removebg-preview.png' className = 'pod'/>
                </div>
            </div>
            <div className = 'firstset'>
            <div className = 'content'>
                <div>
                    <img src = '/Images/image (6).png' className = 'mic'/>
                </div>
                <div id = 'text'>
                    <h4>Skills Of The Future</h4>
                    <h6>Episode 1: Discussion about the skills required for the future success</h6>
                    <img src = '/Images/playIcons-removebg-preview (1).png' className = 'playicons'/>
                </div>
                </div>
                <div className = 'content'>
                <div>
                    <img src = '/Images/image (6).png' className = 'mic2'/>
                </div>
                <div id = 'secondtext'>
                    <h4>Final Project</h4>
                    <h6>Episode 2: Discussion about the skills required for the future success</h6>
                    <img src = '/Images/playIcons-removebg-preview (1).png' className = 'playicons'/>
                </div>
                </div>
            </div>
            <div className = 'secondset'>
<div className = 'content'>
    <div>
        <img src = '/Images/image (6).png' className = 'mic'/>
    </div>
    <div id = 'text'>
        <h4>Internship</h4>
        <h6>Episode 1: Discussion about the skills required for the future success</h6>
        <img src = '/Images/playIcons-removebg-preview (1).png' className = 'playicons'/>
    </div>
    </div>
    <div className = 'content'>
    <div>
        <img src = '/Images/image (6).png' className = 'mic2'/>
    </div>
    <div id = 'secondtext'>
        <h4>Success Story</h4>
        <h6>Episode 2: Discussion about the skills required for the future success</h6>
        <img src = '/Images/playIcons-removebg-preview (1).png' className = 'playicons'/>
    </div>
    </div>
</div>
            </div>
        </div> 



    </div>
  );
};

export default Navbar;





 