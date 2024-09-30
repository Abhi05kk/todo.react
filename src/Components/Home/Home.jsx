import React from "react";
import './Home.css'

const Home = () => {
    return (<div className="text">
        <h1>React Website</h1>
        <p>This Node.js and React project features a user-friendly application that 
            includes a Todo page and a Countries Flag page. <br />The Todo page allows users 
            to create, edit, and delete tasks, providing a seamless experience for 
            managing their daily activities. <br />The Countries Flag page displays a list 
            of countries alongside their respective flags, allowing users to explore 
            and learn about different nations. <br />Utilizing RESTful APIs for data fetching 
            and React's state management, the application ensures smooth interactions and 
            real-time updates, making it both informative and practical for users.</p>
        <header className="header">
            <a href="/" className="logo">React</a>

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/todo">Todo</a>
                <a href="/countries">Countries</a>
            </nav>
        </header>
      </div>
      
      
        
    );
}
export default Home