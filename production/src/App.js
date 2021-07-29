import React from 'react';
import './App.css';
import { sdk } from './cardData'
import { api } from './cardData'
import { courses } from './cardData'
import { experts } from './cardData';
import Navbar from './Components/Navbar.js'
import SDKCard from './Components/SDKCard';
import SectionHeader from './Components/SectionHeader';
import APICard from './Components/APICard';
import MoreButton from './Components/MoreButton';
import ExpertCard from './Components/ExpertCard';
import CourseCard from './Components/CourseCard';

function App() {
  const whatsnew = "https://www2.microstrategy.com/producthelp/Current/Readme/en-us/content/whats_new.htm";
  return (
    <div className="whole">
      <div className="headers">
        <Navbar />
        <div className="welcome">
          <div>
            <h1 id="headerwelcome">Welcome to MicroStrategy Developer</h1>
            <button onClick={function () { window.location = whatsnew }} id="whatsnew">
              See What's New in 2021 &#8594;
            </button>
          </div>
        </div>
      </div>
      <div className="app">
        <SectionHeader name="SDK Tools" desc="Customize, extend, integrate, and embed the power and functionality of MicroStrategy analytics into your Web and Mobile applications" />
        <div className="buttons">
          {
            sdk.map((data) => {
              return (
                <SDKCard
                  name={data.name}
                  desc={data.desc}
                  color={data.color}
                  link={data.link}
                />
              );
            })
          }
        </div>
        <SectionHeader name="API References" desc="Explore API references to harness MicroStrategy's tools" />
        <div className="buttons">
          {
            api.map((data) => {
              return (
                <APICard
                  name={data.name}
                  color={data.color}
                  link={data.link}
                />
              );
            })
          }
        </div>
        <SectionHeader name="Courses" desc="Discover and learn exciting new technology with MicroStrategy classes" />
        <div className="buttons">
          {
            courses.map((data) => {
              return (
                <CourseCard
                  name={data.name}
                  desc={data.desc}
                  src={'./Images/' +  data.src}
                  link={data.link}
                />
              );
            })
          }
        </div>
        <MoreButton name="See more courses" link="https://www.microstrategy.com/en/education"/>
        <SectionHeader name="Experts" desc="Talk to our MicroStrategy SDK experts!" />
        <div className="buttons">
          {
            experts.map((data) => {
              return (
                <ExpertCard
                  name={data.name}
                  desc={data.desc}
                  src={'./Images/' + data.src}
                  link={data.link}
                />
              );
            })
          }
        </div>

      </div>
    </div>
  );
}

export default App;
