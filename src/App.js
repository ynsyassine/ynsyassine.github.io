import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/AboutMe";
import Experiences from "./Components/Experiences";
import PersonalInformation from "./Components/PersonalInformation";
import Projects from "./Components/Projects";
import Welcome from "./Components/Welcome";
import Images from "./Images";

function App() {

  const [mode , setMode] = useState(1);

  const navBarNavigations = [
    {
      name : "projects",
      href : ""
    },
    {
      name : "services",
      href : ""
    },
    {
      name : "Contact",
      href : ""
    },
  ]


  const Header = () => {

    const RenderItemNavBar = ({item}) => {
      return (
        <li className={`${mode==1 ? 'text-light' : ''}`}>
          <span className={`${mode==1 ? 'text-blue' : ''}operator`}>&lt; </span>
          <span className=""> {item.name} </span>
          <span className="operator text-blue"> / &gt; </span>
        </li>
      )
    }

    return (
      <div className="page_header-container">
        <div className="header_left-container">
          <span className={`${mode==1 ? 'text-blue' : ''}`}>&lt; / </span>
          <span className={`${mode==1 ? 'text-light' : ''}`}> yassine el boustani </span>
          <span className={`${mode==1 ? 'text-blue' : ''}`}> &gt; </span>
        </div>
        <div className="header_center-container">
          {
            navBarNavigations.map((item,index)=>
                <RenderItemNavBar  item={item} key={index} />
              )
          }
        </div>
        <div className="header_right-container">
          <i className={`${mode==1 ? 'light-blue' : ''} fa fa-github `}></i>
          <i className={`${mode==1 ? 'light-blue' : ''} fa fa-envelope `}></i>
          <i className={`${mode==1 ? 'light-blue' : ''} fa fa-twitter `}></i>
          <i className={`${mode==1 ? 'light-blue' : ''} fa fa-linkedin `}></i>
        </div>
        <div className="header-switch-mode"> 
          <div className="switch-content">
            <span className={`${mode===1 ? "light-active" : ""}`} onClick={()=>setMode(1)}>L</span>
            <span className={`${mode===0 ? "dark-active" : ""}`} onClick={()=>setMode(0)}>D</span>
          </div>
        </div>
      </div>
    );

  };



  return (
    <div className={`${mode===1 ? 'light-background' : ''} page-container`}>
      <Header />
      <div className="list-body">
        <Welcome mode={mode} />
        <PersonalInformation mode={mode} />
        <Experiences mode={mode}/>
        <Projects mode={mode}/>
        
      </div>
    </div>
  );

}

export default App;
