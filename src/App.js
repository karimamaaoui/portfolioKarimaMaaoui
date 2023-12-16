import './App.css';
import AboutMe from './portfolioContainer/aboutMe/AboutMe';
import Hobby from './portfolioContainer/hobbies/Hobby';
import Home from './portfolioContainer/home/Home';
import Project from './portfolioContainer/project/Project';
import ResumeMe from './portfolioContainer/resume/ResumeMe';


function App() {
  return (
    <div className="App">
      <Home/>
      <AboutMe/>
      <ResumeMe/>
      <Project/>
      <Hobby/>
     </div>
  );
}

export default App;
