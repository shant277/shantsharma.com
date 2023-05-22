import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
      </header>

      <Navbar />
      <section id="about">
        <h2>About Me</h2>
        <p>Hi, I'm Shant Sharma, a software developer from Edmonton, Alberta. 
          I have a degree from Macewan University, and I'm passionate about 
          creating clean and efficient code.</p>
      </section>
      <section id="projects">
        <h2>My Projects</h2>
        <ul>
          <li>
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
          </li>
          <li>
            <h3>Project 2</h3>
            <p>Description of project 2.</p>
          </li>
          <li>
            <h3>Project 3</h3>
            <p>Description of project 3.</p>
          </li>
        </ul>
      
      </section>
          <section id = "skills">
            <h2>Skills</h2>
            <ul>
              <li>Python</li>
              <li>C</li>
              <li>React</li>
              <li>Dart/Flutter</li>
              <li>Arduino Programming Language</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul> 
        </section>

    {/* Contact me section will be have connection to a database one day */}
      <section id="contact">
        <h2>Contact Me</h2>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </section>
      
      <footer>
        <p>&copy; 2023 Shant Sharma. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

