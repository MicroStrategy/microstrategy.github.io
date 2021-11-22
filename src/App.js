import React from 'react';
import './App.css';
import { sdk } from './data/sdkOld';
import { courses }  from './data/courses';
import { experts } from './data/experts';
import Navbar from './Components/Navbar.js';
import SDKCard from './Components/SDKCard';
import SectionHeader from './Components/SectionHeader';
import CourseCard from './Components/CourseCard';
import MoreButton from './Components/MoreButton';
import ExpertCard from './Components/ExpertCard';
import Footer from './Components/Footer'

function App() {
  const whatsnew = "https://www2.microstrategy.com/producthelp/Current/Readme/en-us/content/whats_new.htm";
  return (
    <div className="whole">
      <div className="headers">
        <Navbar />
        <div className="banner">
          <div className="welcome">
            <h1 id="headerwelcome">Welcome to MicroStrategy Developer</h1>
            <button onClick={function () { window.location = whatsnew }} id="whatsnew">
              See What's New in 2021 &#8594;
            </button>
          </div>
          <div class="video">
            <iframe title="Introduction to MicroStrategy"
              src="https://www.youtube.com/embed/QKtIG0MlfAk">
            </iframe>
          </div>
        </div>
      </div>
      <div className="app">
        <div className="SDK-section padding-15">
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
        </div>
        <div className="courses-section padding-15">
          <SectionHeader name="Courses" desc="Discover and learn exciting new technology with MicroStrategy classes" />
          <div className="buttons">
            {
              courses.map((data) => {
                return (
                  <CourseCard
                    name={data.name}
                    desc={data.desc}
                    src={'./Images/' + data.src}
                    link={data.link}
                  />
                );
              })
            }
          </div>
          <MoreButton name="See more courses" link="https://www.microstrategy.com/en/education" />
        </div>
        <div className="experts-section padding-15">
        <SectionHeader name="Experts" desc="Talk to our MicroStrategy SDK experts!" />
        <div className="buttons">
          {
            experts.map((data) => {
              return (
                <ExpertCard
                  name={data.name}
                  desc={data.desc}
                  bio={data.bio}
                  src={'./Images/' + data.src}
                  linkedin={data.linkedin}
                  email={data.email}
                />
              );
            })
          }
        </div>
        </div>
      </div>
      <div className="footers">
        <Footer />
      </div>
    </div>
  );
}

export default App;
