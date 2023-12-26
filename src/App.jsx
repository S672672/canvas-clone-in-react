import React from 'react';
import './App.css';
import './assets/rklogo.png';
import Card from './card';

function App() {
  return (
    <>
    <div className='fscreen'>
    <div className='sidebar'>
      <img src= "./src/assets/rklogo.png" />
    <div className='sideitems'>
      Account
    </div>
    <div className='sideitems'>
      Dashboard
    </div>
    <div className='sideitems'>
      courses
    </div>
    <div className='sideitems'>
      calender
    </div>
    </div>
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
    subjectcode = "2324SOE" 
    year = "2023-24" />
    <Card 
    threedots = "..." 
    subject = "compiler design" 
    subjectcode = "2324SOE" 
    year = "2023-24" />
    <Card 
    threedots = "..." 
    subject = "compiler design" 
    subjectcode = "2324SOE" 
    year = "2023-24" />
    <Card 
    threedots = "..." 
    subject = "compiler design" 
    subjectcode = "2324SOE" 
    year = "2023-24" />
     <Card 
    threedots = "..." 
    subject = "compiler design" 
    subjectcode = "2324SOE" 
    year = "2023-24" />
    <Card 
    threedots = "..." 
    subject = "compiler design" 
    subjectcode = "2324SOE" 
    year = "2023-24" />
    </div> 
    </div>
    <div className='thirdsection'>
      <div className='thirdsecnav'>
      To do
      </div>
    </div>
    </div>
    </>
  )
}

export default App;