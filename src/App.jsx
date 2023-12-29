import React from 'react';
import './App.css';
import './assets/rklogo.png';
import Card from './card';
import Todo from './todo';

function App() {
  return (
    <>
    <div className='fscreen'>
    <div className='sidebar'>
      <img src= "./src/assets/rklogo.png" />
      <div className='sidenavitems'>
      <div className='iconnitems'>
      <img src='./src/assets/Account.png'></img>
    <div className='sideitems'>
      Account
    </div>
    </div>
    <div className='iconnitems'>
    <img src='./src/assets/dashboard.png'></img>
    <div className='sideitems'>
      Dashboard
    </div>
    </div>
    <div className='iconnitems'>
    <img src='./src/assets/courses-icon.png'></img>
    <div className='sideitems'>
      courses
    </div>
    </div>
    <div className='iconnitems'>
    <img src='./src/assets/calender-icon.png'></img>
    <div className='sideitems'>
      calender
    </div>
    </div>
    </div>
    </div>
    <div className='secthird'>
    <div className='middlebody'>
    <div className='nbar'>
    <div className='nitems'>
    Dashboard
    </div>
      <img src='./src/assets/setting.png' />
    </div>
     <div className ='contentbody'>
    <Card 
    threedots = "..." 
    subject = "compiler design" 
    subjectcode = "2324SOE-CE931" 
    year = "2023-24(even)" />
    <Card 
    threedots = "..." 
    subject = "compiler design" 
    subjectcode = "2324SOE-CE931" 
    year = "2023-24(even)" />
    <Card 
    threedots = "..." 
    subject = "compiler design" 
    subjectcode = "2324SOE-CE931" 
    year = "2023-24(even)" />
    <Card 
    threedots = "..." 
    subject = "compiler design" 
    subjectcode = "2324SOE-CE931" 
    year = "2023-24(even)" />
     <Card 
    threedots = "..." 
    subject = "compiler design" 
    subjectcode = "2324SOE-CE931" 
    year = "2023-24(even)" />
    <Card 
    threedots = "..." 
    subject = "compiler design" 
    subjectcode = "2324SOE-CE931" 
    year = "2023-24(even)" />
    </div> 
    </div>
    <div className='thirdsection'>
      <div className='thirdsecnav'>
      To do
      </div>
      <Todo Experiment = "Experiment-1" subjectcodes = "21SOECE-CE234" deadline = "10 points~31 dec" />
      <Todo Experiment = "Experiment-1" subjectcodes = "21SOECE-CE234" deadline = "10 points~31 dec" />
      <Todo Experiment = "Experiment-1" subjectcodes = "21SOECE-CE234" deadline = "10 points~31 dec" />
      <Todo Experiment = "Experiment-1" subjectcodes = "21SOECE-CE234" deadline = "10 points~31 dec" />
    </div>
    </div>
    </div>
    </>
  )
}

export default App;